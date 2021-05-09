const { courseInfo__controller,showCourseInfo__controller } = require('../controller/courseController')

const router=require('express').Router()



router.post('/post-course-information',courseInfo__controller)

router.get('/get-course-information',showCourseInfo__controller)



module.exports=router