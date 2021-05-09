const mongoose=require('mongoose')

const facultySchema=mongoose.Schema({
    Faculty_Name:{
        type: String,
        require: true
    },
    Designation:{
        type: String,
        require: true
    },
    Department:{
        type: String,
        require: true
    },
    Faculty_Email:{
        type: String,
        require: true
    },
    Faculty_Phone_No:{
        type: Number,
        require: true
    },
},
{
    timestamps: true
})


const FacultyModel=mongoose.model('Faculty',facultySchema)

module.exports=FacultyModel