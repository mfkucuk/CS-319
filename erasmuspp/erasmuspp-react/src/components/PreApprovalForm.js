import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Image from "./lastPrint.png";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

export default function PreApprovalFormN() {

    let checked = false;
    let submissionSuccess = false;
    let navigate = useNavigate();
    function clickBack() {
        navigate("/myApplication");
    }

    function clickPrint(){

    }

    function clickUpload() {

    }

    function clickSubmit() {
        if(submissionSuccess)
            alert("Learning Agreement Submitted Succesfully!");
        else
            alert("Learning Agreement Submission Failed.");
    }

    return (
        <div class="container-fluid">
            <TopNavBar />
            <div class="row" style={{ backgroundColor: '#1F8F8E', height: '100vh' }}>

                <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
                    <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
                        Go Back
                    </Button>
                </div>

                <div class="col-md-8 text-center">
                    <br></br>
                    <header style={{ fontSize: '50px', color: '#FBFCF8' }}>Pre-Approval Form </header>
                    <br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Print Pre-Approval Form </header>
                    <br></br>
                    <img id="printImage" src={Image} onClick={clickPrint} style={{cursor: 'pointer'}}></img>
                    <br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Upload Signed Pre-Approval Form </header>
                    <br></br>
                    <div class="justify-content-center" style={{ display: 'flex' }}>
                        <Form.Group style={{ width: '270px', justifyContent: 'center'}}>
                            <Form.Control type="file" size="lg" />
                        </Form.Group>
                    </div>
                    <br></br>
                    <Button onClick={clickUpload} style={{backgroundColor: '#3C7479'}}>
                        Upload
                    </Button>
                    <br></br><br></br><br></br><br></br>
                    <Button onClick={clickSubmit} style={{ backgroundColor: "#3C7479", borderRadius: '20px', fontSize: '20px'}}>
                        Submit
                    </Button>
                </div>

                <div class="col-md-2">

                </div>

            </div>
            <DefaultFooter />
        </div>
    );
}