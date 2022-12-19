import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Image from "./lastPrint.png";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoordinatorLearningAgreementN() {


    const [learningAgreementFb64, setlearningAgreementFb64] = useState("");


    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/file/applicationId=" + window.localStorage.getItem("LAST_APPLICATION"))
        .then(res => {
            for(let i = 0; i < res.data.length; i++){
                if(res.data[i]?.fileType === "Learning Agreement"){
                    setlearningAgreementFb64(res.data[i].content);
                }
            }
        })
        .catch(err=>{
          console.log(err)
        })
  
    }, [learningAgreementFb64])
    let navigate = useNavigate();
    function clickBack() {
        navigate("/toDoList");
    }

    const downloadPreApproval = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = learningAgreementFb64;
        downloadLink.download = "Learning Agreement Form";
        downloadLink.click();
      }

    function approve(applicationId) {
    axios.put("http://localhost:8080/api/v1/application/approve/applicationId=" + applicationId)
        .then(res => {
        if(res.data === 1)
        {
            alert("Application approved!")
        }
        else{
            alert("Application approve failed!")
        }          
        })
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
                    <header style={{ fontSize: '50px', color: '#FBFCF8' }}>Learning Agreement</header>
                    <br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Download Learning Agreement </header>
                    <br></br>
                    <img id="printImage" src={Image} style={{cursor: 'pointer'}} onClick={downloadPreApproval}></img>
                    <br></br><br></br>
                    
                   <br></br><br></br><br></br>
                </div>

                <div class="col-md-2">

                </div>

            </div>
            <DefaultFooter />
        </div>
    );
}