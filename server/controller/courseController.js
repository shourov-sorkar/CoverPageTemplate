const CourseModel=require('../model/CourseModel')

module.exports.courseInfo__controller=async(req,res,next)=>{
    try {

        const {Course_Name, Department, Course_Code}=req.body

        const courseInfo=new CourseModel({
            Course_Name, Department, Course_Code
        })
       
        const result=await courseInfo.save()
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

module.exports.showCourseInfo__controller=async (req,res,next)=>{
    try {
        const courseInfo=await CourseModel.find({})
        return res.status(200).json({
            courseInfo
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error:" Error occurred"
        })
        
    }
}