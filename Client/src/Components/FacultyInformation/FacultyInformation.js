import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./FacultyInfo.module.css";

const FacultyInformation = () => {
  const [Department, setDepartment] = useState("");
  const [Faculty_Phone_No, setFaculty_Phone_No] = useState("");
  const [Faculty_Email, setFaculty_Email] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Faculty_Name, setFaculty_Name] = useState("");
  const [loading, setLoading] = useState("");
  const [msg,setMsg]=useState('')

  const facultyDataHandler=(e)=>{
    e.preventDefault()
    setLoading(true)

    fetch('http://localhost:5000/post-faculty-information',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Faculty_Phone_No, Faculty_Email,Department,Designation,Faculty_Name
      })

    })
    .then(res=>res.json())
    .then(result=>{
      setLoading(false)
      setDepartment('')
      setFaculty_Email('')
      setDesignation('')
      setFaculty_Name('')
      setFaculty_Phone_No('')
      setMsg("Information submitted")
    })
    .catch(err=>{
      console.log(err)
    })

  }

  return (
    <Container>
      <h1 className={`${styles.title} my-5 text-center`}>
        Add Faculty Information
      </h1>
      <Form onSubmit={facultyDataHandler} className="my-5">
        {
          loading && 'Loading'
        }
        {
          msg && <p>
            {msg}
          </p>
        }
        <Form.Group>
          <Form.Label>Faculty Name</Form.Label>
          <Form.Control
            value={Faculty_Name}
            onChange={(e) => setFaculty_Name(e.target.value)}
            type="text"
            placeholder="Enter Faculty Name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Designation</Form.Label>
          <Form.Control
          value={Designation}
          onChange={(e) => setDesignation(e.target.value)}
            type="text"
            placeholder="Enter Faculty Designation"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control
          value={Department}
          onChange={(e) => setDepartment(e.target.value)}
            type="text"
            placeholder="Enter Faculty Department"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Faculty Email</Form.Label>
          <Form.Control 
          value={Faculty_Email}
          onChange={(e) => setFaculty_Email(e.target.value)}
          type="email" placeholder="Enter Faculty Mail" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Faculty Phone No.</Form.Label>
          <Form.Control
          value={Faculty_Phone_No}
          onChange={(e) => setFaculty_Phone_No(e.target.value)}
            type="tel"
            placeholder="01700-000000"
            //pattern="[0-9]{5}-[0-9]{6}"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button className="mx-2">
          <Link to="/" className="text-light text-decoration-none">
            Back to homepage
          </Link>
        </Button>
        <Button className="mx-2">
          <Link to="/showFacultyInfo" className="text-light text-decoration-none">
            Show Faculty Information
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default FacultyInformation;
