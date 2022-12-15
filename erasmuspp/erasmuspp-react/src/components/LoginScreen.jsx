import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function LoginScreen(){
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

    let navigate = useNavigate();
    const login = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(password);
      axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            if (res.data[0].id === 1) {
              navigate("/main");
            }
            
          });
    };
    
    
  return (
    <div class="position-absolute top-50 start-50 translate-middle">
    <h1>LOGIN</h1>
      <Card style={{ width: '18rem' }}>
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value ={email} onChange = {(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick = {login}>
            Submit
          </Button>
        </Form>
      </Card>
    </div> 
  );
}

function navigateMainScreen() {
    
}