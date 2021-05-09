import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const ShowCourses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-course-information", {
      method: "get",
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result.courseInfo);
        setData(result.courseInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col md={10} className="mx-auto">
              <h2 className='my-4 text-center'>Course Information</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course_Name</th>
                  <th>Department</th>
                  <th>Course_Code</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map(({ Course_Code, Course_Name, Department, _id }) => {
                    return (
                      <tr key={_id}>
                        <td>{_id}</td>
                        <td>{Course_Name}</td>
                        <td>{Department}</td>
                        <td>{Course_Code}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowCourses;
