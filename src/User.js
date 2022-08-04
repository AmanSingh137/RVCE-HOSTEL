import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <Container className="album py-5 d-flex container justify-content-between align-items-center">
        <Card style={{ width: "25rem" }} className="mx-auto mt-5">
          <Card.Body>
            <Card.Title>Student</Card.Title>
            <Link to="/options">Get latest details about the RVCE Hostel.</Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem" }} className="mx-auto mt-5">
          <Card.Body>
            <Card.Title>Admin</Card.Title>
            <Link to="/verify">Click to verify</Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default User;
