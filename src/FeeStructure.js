import React from 'react';
import { Table } from 'react-bootstrap';

const FeeStructue = () => {
    return (
        <Table striped bordered hover className="mx-auto mt-5" style={{width: '40rem'}}>
            <thead>
                <tr>
                    <th>Span</th>
                    <th>Fees including taxes (SGST+CGST)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 Semester</td>
                    <td>₹49, 470</td>
                </tr>
                <tr>
                    <td>1 Year</td>
                    <td>₹1, 08, 490</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default FeeStructue;