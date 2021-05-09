const FacultyModel=require('../model/FacultyModel')

module.exports.facultyInfo__controller=async(req,res,next)=>{
    try {

        const {Faculty_Phone_No, Faculty_Email,Department,Designation,Faculty_Name}=req.body

        const facultyInfo=new FacultyModel({
            Faculty_Phone_No, Faculty_Email,Department,Designation,Faculty_Name
        })
       
        const result=await facultyInfo.save()
        return res.status(200).json({
            result
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error:" Error occurred"
        })
    }
}

module.exports.showFacultyInfo__controller=async (req,res,next)=>{
    try {
        const facultyInfo=await FacultyModel.find({})
        return res.status(200).json({
            facultyInfo
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error:" Error occurred"
        })
        
    }
}