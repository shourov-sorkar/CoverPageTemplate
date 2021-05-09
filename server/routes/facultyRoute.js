const { facultyInfo__controller,showFacultyInfo__controller } = require('../controller/facultyController')

const router=require('express').Router()



router.post('/post-faculty-information',facultyInfo__controller)

router.get('/get-faculty-information',showFacultyInfo__controller)



module.exports=router