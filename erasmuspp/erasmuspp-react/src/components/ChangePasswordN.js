import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordN() {
    let checked = false;
    let navigate = useNavigate();
    function clickBack(){
        navigate("/profile");
    }
    return (
        <div class="container-fluid">
            <TopNavBar/>
            <div class="row" style={{ backgroundColor: '#1F8F8E', height: '100vh'}}>

                <div class="col-md-2 justify-content-end" style={{display: 'flex'}}>
                    <Button style={{margin: '40px', height: '40px'}} onClick={clickBack}>
                        Go Back
                    </Button>
                </div>

                <div class="col-md-8 text-center">
                    <br></br>
                    <header style={{ fontSize: '50px', color: '#FBFCF8'}}>Change Password</header>
                    <br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black'}}>Enter Old Password: </header>
                    <br></br>
                    <input></input>
                    <br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black'}}>Enter New Password: </header>
                    <br></br>
                    <input></input>
                    <br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black'}}>Confirm New Password: </header>
                    <br></br>
                    <input></input>
                    <br></br><br></br><br></br><br></br>
                    <Button style={{backgroundColor: "#3C7479"}}>
                        Change Password
                    </Button>
                </div>

                <div class="col-md-2">

                </div>

            </div>
            <DefaultFooter/>
        </div>
    );
}