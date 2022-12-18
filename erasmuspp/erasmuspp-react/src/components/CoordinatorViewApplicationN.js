import Form from 'react-bootstrap/Form';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import UploadFileModalPopUpY from './UploadFileModalPopUp';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import LargeBreak from './LargeBreak';

export default function CoordinatorViewApplicationN() {
    const [statementOfPurpose, setStatementOfPurpose] = useState("");
    const [sopB64, setsopB64] = useState("");

    const [CV, setCV] = useState("");
    const [CVB64, setCVB64] = useState("");

    const [appForm, setAppForm] = useState("");
    const [appFormB64, setappFormB64] = useState("");

    let navigate = useNavigate();
    function handleClickEditApplicationForm() {
        navigate("/editApplicationForm");
    }

    function handleClickViewApplicationForm() {
        navigate("/viewApplicationForm");
    }

    function handleCLickRoadmap() {
        navigate("/roadmap");
    }

    function clickBack() {
        navigate("/toDoList");
    }

    const uploadStatemenetOfPurpose = async (e) => {
        const statementOfPurpose = e.target.files[0];

        setsopB64(await toB64(statementOfPurpose));
    };

    const toB64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        })
    }

    const uploadSOPFinal = () => {
        console.log(sopB64);
        axios
            .post("http://localhost:8080/api/v1/application/uploadStatementOfPurpose/token=" + window.localStorage.getItem("USER_TOKEN"),
                {
                    statementOfPurposeForm: sopB64
                }
            )
            .then((res) => {
                if (res.data.status === true) {
                    alert("Statement of Purpose Uploaded Successfully")
                }
                else {
                    alert("Statement of Purpose Failed to Upload")
                }
            }).catch((err) => {

                alert("Statement of Purpose Failed to Upload")
            });
    }

    const downloadSop = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = sopB64;
        downloadLink.download = "Fill Application Form";
        downloadLink.click();
    }

    const uploadCV = async (e) => {
        const CV = e.target.files[0];

        setCVB64(await toB64(CV));
    }

    const uploadAppFormFinal = () => {
        console.log(appFormB64);
        axios
            .post("http://localhost:8080/api/v1/application/uploadApplicationForm/token=" + window.localStorage.getItem("USER_TOKEN"),
                {
                    applicationForm: appFormB64
                }
            )
            .then((res) => {
                if (res.data.status === true) {
                    alert("Application Form Uploaded Successfully")
                }
                else {
                    alert("Application Form Failed to Upload")
                }
            }).catch((err) => {

                alert("Application Form Failed to Upload")
            });
    }

    const uploadCVFinal = () => {
        console.log(CVB64);
        axios
            .post("http://localhost:8080/api/v1/file/",
                {
                    applicationId: "3",
                    content: CVB64,
                    fileName: "CV",
                    uploadTime: "18.12.2022"
                }
            )
            .then((res) => {
                if (res.data.status === true) {
                    alert("CV Uploaded Successfully")
                }
                else {
                    alert("CV Failed to Upload")
                }
            }).catch((err) => {

                alert("CV Failed to Upload")
            });
    }

    const uploadApplicationForm = async (e) => {
        const appForm = e.target.files[0];

        setappFormB64(await toB64(appForm));
    };

    return (
        <div style={{ backgroundColor: "#C7D6D2" }}>
            <TopNavBar />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
                        <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
                            Go Back
                        </Button>
                    </div>
                    <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                        <br /><br />
                        <h3 style={{ color: '#f4eff2' }}>My Application</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
                    </div>
                    <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
                    </div>
                    <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
                        <br />
                        <div className="pt-2">
                            <Form.Group controlId="uploadStatementofPurposeForm" className="mb-3">
                                <Form.Label style={{ color: '#f4eff2' }}>Download Statement of Purpose</Form.Label>
                            </Form.Group>
                        </div>

                        <br /><br /><br />
                        <div className='pt-2'>
                            <Form.Group controlId="uploadCVForm" className="mb-3">
                                <Form.Label style={{ color: '#f4eff2' }}>Download CV</Form.Label>
                            </Form.Group>
                        </div>

                        <br /><br />
                        <div className='pt-2'>
                            <Form.Group controlId="uploadApplicationForm" className="mb-3">
                                <Form.Label style={{ color: '#f4eff2' }}>Download Application Form</Form.Label>
                            </Form.Group>
                        </div>

                    </div>
                    <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>

                        <br />
                        <div className='pt-2'>
                            <Button style={{ backgroundColor: "#3C7479" }} onClick={uploadSOPFinal}>
                                Download
                            </Button>
                        </div>
                        <br /><br /><br />
                        <div className='pt-2'>
                            <Button style={{ backgroundColor: "#3C7479" }} onClick={uploadCVFinal}>
                                Download
                            </Button>
                        </div>
                        <br /><br /><br />
                        <div className='pt-2'>
                            <Button style={{ backgroundColor: "#3C7479" }} onClick={uploadAppFormFinal}>
                                Download
                            </Button>
                        </div>
                    </div>
                    <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>

                    </div>
                    <div class="col-md-2">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                        <LargeBreak></LargeBreak>
                        <Button onClick={(e) => { }} style={{ margin: '2rem', backgroundColor: "#3C7479" }}>
                            Approve
                        </Button>
                        <Button onClick={(e) => { }} style={{ margin: '2rem', backgroundColor: "#3C7479" }}>
                            Disapprove
                        </Button>
                    </div>
                </div>
            </div>
            <DefaultFooter />
        </div>
    );
}