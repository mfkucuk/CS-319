import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';



export default function ForgotPasswordN() {
    let checked = false;

    return (
        <div>
            <TopNavBar/>
            <div class="container-fluid" style={{ backgroundColor: '#A7DFD7', height: '100vh'}}>
                <div class="row"  className="col text-center">
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '40px', color: 'black'}}>Forgot Password?</header>
                    <br></br><br></br>
                    <header style={{ fontSize: '20px', color: 'black'}}> Please enter your university e-mail below. We will send your password in e-mail format.</header>
                    <br></br><br></br>
                    <input></input>
                    <br></br><br></br>
                    <Button>Send</Button>
                    <br></br><br></br>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <input type="checkbox" disabled="true" checked={checked} style={{marginRight: '20px', scale: '2'}}></input>
                        <header>Password is sent to your e-mail</header>
                    </div>
                    
                    {/* <Form.Control class="col text-center" as="textarea" style={{width: '100px', display: 'inherit'}}/> */}
                </div>
                
                
            </div>
            <DefaultFooter/>
        </div>
    );
}