import React from 'react';
import { Card, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Complaints = () => {
    
    return (
        <Card style={{width: '50rem'}} className="mx-auto mt-5">
            <InputGroup className="mb-3" >
                <FormControl
                    placeholder="Enter your complaint"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Link to="/success" className="btn btn-primary" >Submit</Link>
        </Card>
    )
}

export default Complaints;