import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./FacultyInfo.module.css";
const FacultyInformation = () => {
  return (
    <Container>
      <h1 className={`${styles.title} my-5 text-center`}>
        Add Faculty Information
      </h1>
      <Form className="my-5">
        <Form.Group>
          <Form.Label>Faculty Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Faculty Name" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Faculty Designation"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Faculty Department"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Faculty Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Faculty Mail" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Faculty Phone No.</Form.Label>
          <Form.Control type="tel" placeholder="01700-000000" pattern="[0-9]{5}-[0-9]{6}" />
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

export default FacultyInformation;
