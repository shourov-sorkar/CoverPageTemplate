import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./CourseInfo.module.css";
const CourseInformation = () => {
  return (
    <Container>
      <h1 className={`${styles.title} my-5 text-center`}>
        Add Course Information
      </h1>
      <Form className="my-5">
        <Form.Group>
          <Form.Label>Couse Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Course Name" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Course Code</Form.Label>
          <Form.Control type="text" placeholder="Enter Course Code" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" placeholder="Enter Department Name" required />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button className="mx-2">
          <Link to="/" className="text-light text-decoration-none">
            Back to homepage
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default CourseInformation;
