import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Options = () => {
    return (<Container className="album py-5 d-flex container justify-content-between align-items-center">
        <div className="row">
        <div className="col-md-4">
            <Card style={{ width: '18rem' }} className="card mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Room Availability</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Rooms for boys and girls hostel</Card.Subtitle>
                    <Card.Text>
                        Chamundi, MV Hostel, Cauvery, Krishna Garden, DJ Hostel.
                    </Card.Text>
                    <Link to="/rooms">Check room availability</Link>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card style={{ width: '18rem' }} className="card mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Mess Food Schedule</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Breakfast, Lunch, Snacks and Dinner</Card.Subtitle>
                    <Card.Text>
                        North and South Indian food.
                    </Card.Text>
                    <Link to="/menucard">View menu card</Link>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card style={{ width: '18rem' }} className="card mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Mess staff </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Contact details of mess staff</Card.Subtitle>
                    <Card.Text>
                        Wardens, Cashiers, Security personnel, chefs, Laundry.
                    </Card.Text>
                    <Link to="/staff">View details</Link>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card style={{ width: '18rem' }} className="card mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Complaints</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Complaints book</Card.Subtitle>
                    <Card.Text>
                        You can anonymously post complaints in the complain book
                    </Card.Text>
                    <Link to="/complaints">Post your complaint</Link>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card style={{ width: '18rem' }} className="card mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Fee Structure</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">KCET, COMEDK, ...</Card.Subtitle>
                    <Card.Text>
                        View the fee structure set for various categories. 
                    </Card.Text>
                    <Link to="/feestructure" >View fees structure</Link>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card style={{ width: '18rem' }} className="card mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Payments</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Hostel fees and Mess fees</Card.Subtitle>
                    <Card.Text>
                        Do safeless and contactless payments by clicking the link below. 
                    </Card.Text>
                    <Link to="/payments">Make payments!</Link>
                </Card.Body>
            </Card>
        </div>
        </div>
    </Container>
    )
};

export default Options;
