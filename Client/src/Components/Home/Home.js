import { Button } from "@material-ui/core";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Container className="text-center my-5">
        <h1>This is Home Page</h1>
        <Button variant="outlined" color="secondary" className="my-5 FacultyInfo">
          <Link to="/FacultyInformation" className="text-decoration-none FacultyText"> Added Faculty Information</Link>
        </Button>
        <br></br>
        <Button variant="outlined" color="secondary" className="my-5 FacultyInfo ml-1">
          <Link to="/CourseInformation" className="text-decoration-none FacultyText"> Added Course Information</Link>
        </Button>
      </Container>
    </div>
  );
};

export default Home;
