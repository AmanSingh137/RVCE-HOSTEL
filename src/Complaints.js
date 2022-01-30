import React, { useState } from 'react';
import { Card, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Complaints = () => {
    const [complaint, setComplaint] = useState('');
    const handleSubmit = (e) => {
        const Complains = {
            Complaints: complaint
        }
        axios.post('https://sheet.best/api/sheets/6ff549e8-66b5-4da0-a7f9-08216534e164', Complains).then(()=>{
            setComplaint('');
        })
    }
    return (
        <Card style={{width: '50rem'}} className="mx-auto mt-5">
            <InputGroup className="mb-3" >
                <FormControl
                    placeholder="Enter your complaint"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=>setComplaint(e.target.value)}
                />
            </InputGroup>
            <Link to="/success" className="btn btn-primary" onClick={handleSubmit} >Submit</Link>
        </Card>
    )
}

export default Complaints;