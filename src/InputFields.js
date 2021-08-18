import React, { useState } from "react";
import { Card, InputGroup, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
const InputField = () => {
   // let editor = 0;
   const [nameField, setNameField] = useState('');
   const nameChangeHandler = (event) => {
       event.preventDefault();
       setNameField(event.target.value);
       //console.log(event.target.value);
   }

   const [usnField, setUsnField] = useState('');
   const usnChangeHandler = (event) => {
       event.preventDefault();
       setUsnField(event.target.value);
   }
   const [path, setPath] = useState('/');
   const submitHandler = () => {
       if(nameField.length !== 0 && usnField.length !== 0) {
           //console.log("editing success");
           setPath('/options');
       }
       else {
           alert("Valid input required!");
       }
   }

    return (
    <Card style={{ width: "25rem" }} className="mx-auto mt-5">
      <Card.Body>
        <InputGroup className="mb-3" onChange={nameChangeHandler}>
          <FormControl
            placeholder="Email ID"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3" onChange={usnChangeHandler}>
          <FormControl
            placeholder="USN"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <div className="d-grid gap-2">
        <Link to={path} className="btn btn-outline-primary" onClick={submitHandler}>Submit</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InputField;
