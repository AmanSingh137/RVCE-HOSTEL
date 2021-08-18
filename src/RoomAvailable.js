import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const RoomAvailabe = () => {
    return (
        <Card className="mt-4 mx-auto align-items-center" style={{width: '20rem'}}>
            <Card.Header className="bg-light">Rooms</Card.Header>
            <Card.Body>
                <Card.Title>XYZ rooms are available</Card.Title>
                <Card.Text>
                    Book your room now!
                </Card.Text>
                <Link className="btn btn-primary" to="/payments">Payments</Link>
            </Card.Body>
        </Card>
    )
}

export default RoomAvailabe;