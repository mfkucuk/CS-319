import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export default function LoginScreen(){
    
    let navigate = useNavigate();
    function handleClick() {
        navigate("/main");
    }
  return (
    <div class="position-absolute top-50 start-50 translate-middle">
    <h1>LOGIN</h1>
      <Card style={{ width: '18rem' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick = {handleClick}>
            Submit
          </Button>
        </Form>
      </Card>
    </div> 
  );
}

function navigateMainScreen() {
    
}