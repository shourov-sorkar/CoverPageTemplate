const mongoose=require('mongoose')

const CourseSchema=mongoose.Schema({
    Course_Name:{
        type: String,
        require: true
    },
   
    Department:{
        type: String,
        require: true
    },
   
    Course_Code:{
        type: String,
        require: true
    },
},
{
    timestamps: true
})


const CourseModel=mongoose.model('Course',CourseSchema)

module.exports=CourseModel