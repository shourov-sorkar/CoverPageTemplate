import React, { useEffect, useState } from "react";
import { Col, Row,Table,Container } from "react-bootstrap";

const ShowFacultyInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-faculty-information", {
      method: "get",
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result.facultyInfo);
        setData(result.facultyInfo);
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
            <h2 className="my-4 text-center">Faculty Information</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Faculty_Phone_No</th>
                  <th>Faculty_Name</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map(
                    ({
                      Faculty_Phone_No,
                      Designation,
                      Department,
                      _id,
                      Faculty_Name,
                    }) => {
                      return (
                        <tr key={_id}>
                          <td>{_id}</td>
                          <td>{Designation}</td>
                          <td>{Department}</td>
                          <td>{Faculty_Phone_No}</td>
                          <td>{Faculty_Name}</td>
                        </tr>
                      );
                    }
                  )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowFacultyInfo;
