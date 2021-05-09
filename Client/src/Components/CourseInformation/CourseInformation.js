import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./CourseInfo.module.css";
const CourseInformation = () => {
  const [Course_Name,setCourse_Name]=useState('')
  const [Department,setDepartment]=useState('')
  const [Course_Code,setCourse_Code]=useState('')
  const [loading,setLoading]=useState(false)

  const formSubmitHandler=(e)=>{
    e.preventDefault()
    setLoading(true)

    fetch('http://localhost:5000/post-course-information',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Course_Name, Department, Course_Code
      })

    })
    .then(res=>res.json())
    .then(result=>{
      setCourse_Name('')
      setDepartment('')
      setCourse_Code('')
      setLoading(false)
      
    })
    .catch(err=>{
      console.log(err)
    })

  }
  return (
    <Container>
      <h1 className={`${styles.title} my-5 text-center`}>
        Add Course Information
      </h1>
      <Form onSubmit={formSubmitHandler} className="my-5">
        <Form.Group>
          <Form.Label>Couse Name</Form.Label>
          <Form.Control value={Course_Name} onChange={(e)=>setCourse_Name(e.target.value)} type="text" placeholder="Enter Course Name" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Course Code</Form.Label>
          <Form.Control value={Course_Code} onChange={(e)=>setCourse_Code(e.target.value)}  type="text" placeholder="Enter Course Code" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control value={Department} onChange={(e)=>setDepartment(e.target.value)}  type="text" placeholder="Enter Department Name" required />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button className="mx-2">
          <Link to="/" className="text-light text-decoration-none">
            Back to homepage
          </Link>
        </Button>
        <Button className="mx-2">
          <Link to="/show-courses" className="text-light text-decoration-none">
            Show-Courses
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default CourseInformation;
