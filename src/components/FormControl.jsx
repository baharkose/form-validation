import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormControl() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    image: "",
    password: "",
  });

  //? destr
  const { firstname, lastname, image, password } = data;

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setData({
        firstname:"", 
        lastname:"", 
        image: "",
        password: ""
    })
  };



  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          onChange={handleData}
          value={firstname}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          onChange={handleData}
          value={lastname}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Img Url"
          onChange={handleData}
          value={image}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleData}
          value={password}
        />
       
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormControl;
