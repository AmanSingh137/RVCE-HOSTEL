import React from "react";
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminOptions = () => {
  return (
    <>
      <Container className="album py-5 d-flex container justify-content-between align-items-center">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }} className="card mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Manage Hostel Rooms</Card.Title>
                <Link to="/rooms">Check current status</Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }} className="card mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Mess Food Schedule</Card.Title>
                <Link to="/menucard">Handle Mess Menu</Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }} className="card mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Handle staff</Card.Title>
                <Link to="/staff">View details</Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }} className="card mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Complaints</Card.Title>
                <Link to="/complaints">Manage Complaints </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }} className="card mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Payments</Card.Title>
                <Link to="/payments">Manage staff payments and student payments</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AdminOptions;
