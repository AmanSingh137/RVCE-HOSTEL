import React from 'react';
import { Table } from 'react-bootstrap';

const MessStaff = () => {
    return (
        <Table striped bordered hover className="mx-auto mt-5" style={{width: '40rem'}}>
            <thead>
                <tr>
                    <th>Staff name/designation</th>
                    <th>Contact number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Warden Chamundi</td>
                    <td>9449335861</td>
                </tr>
                <tr>
                    <td>Hostel supridentent</td>
                    <td>9916911720</td>
                </tr>
                <tr>
                    <td>Naghander Babu</td>
                    <td>7975732406</td>
                </tr>
                <tr>
                    <td>Hostel Office</td>
                    <td>080-67178424</td>
                </tr>
                <tr>
                    <td>Hostel Office</td>
                    <td>080- 67178148</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MessStaff;