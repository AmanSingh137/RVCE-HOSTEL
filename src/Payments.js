import React from 'react';
import { Table, Card } from 'react-bootstrap';

const Payments = () => {
    return (
        <>
        <Card className="mx-auto mt-5">
        <Card.Body><h3>The fee structure is for the students who want to avail the mess facilities.</h3></Card.Body>
        </Card>
        <Table striped bordered hover className="mt-4 mx-auto" style={{width:'40rem'}}>
            <thead>
                <tr>
                    <th>Fees</th>
                    <th>UPI IDs for payments</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Hostel Fees</td>
                    <td>Boys: boyshostel@okaxis &emsp; Girls: girlshostel@okicici</td>
                </tr>
                <tr>
                    <td>Mess Fees</td>
                    <td>Boys: boysmess@okaxis &emsp; Girls: girlsmess@okicici</td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}

export default Payments;