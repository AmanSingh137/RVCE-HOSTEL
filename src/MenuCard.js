import React from 'react';
import { Table, Card } from 'react-bootstrap';

const MenuCard = () => {
    return (
        <>
        <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Lunch</th>
                    <th>Dinner</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>Idli Vada + sprouted seeds +
                        milk/coffee</td>
                    <td>Chapati, ladies finger bhaji,
                        plain rice and rasum
                    </td>
                    <td>Chapati, mix veg bhaji and
                        fried Rice and sweet</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>Puri + sprouted seeds +
                        milk/coffee</td>
                    <td>Chapati, potato bhaji, plain
                        rice with samber</td>
                    <td>Chapati, palak paneer bhaji
                        and lemon Rice</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>Set dosa + sprouted seeds +
                        milk/coffee</td>
                    <td>Chapati, mix veg bhaji, and
                        curd rice</td>
                    <td>Chapati, gobi bhaji and veg
                        biriyani Rice</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>Ravi Idli Vada + sprouted
                        seeds + milk/coffee</td>
                    <td>Chapati, bhaji, and plain rice </td>
                    <td>Chapati, palak paneer bhaji ,
                        lemon Rice + sweet</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>Paratha + sprouted seeds +
                        milk/coffee</td>
                    <td>Chapati, ladies finger bhaji,
                        plain rice and rasum
                    </td>
                    <td>Chapati, gobi bhaji and veg
                        biriyani Rice</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>Beated Rice + curd +
                        sprouted seeds + milk/coffee</td>
                    <td>Chapati, bhaji, and plain rice</td>
                    <td>Chapati, palak paneer bhaji ,
                        lemon Rice + sweet</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>Masala dosa + coffee/milk</td>
                    <td>Puri, curd rice, veg biriyani,
                        ice cream</td>
                    <td>Chapati, gobi bhaji and veg
                        biriyani Rice</td>
                </tr>

            </tbody>
        </Table>
        <Card className="mx-auto mt-5">
        <Card.Body>
            <h3>Timinigs: </h3>
            <h4>Breakast- 7:30 am to 9:00 am</h4>
            
            <h4>Lunch- 12:30 pm to 2:00 pm</h4>
            
            <h4>Dinner- 7:30 pm to 9:00 pm</h4>

        </Card.Body>
        </Card>
        </>
    )
}

export default MenuCard;