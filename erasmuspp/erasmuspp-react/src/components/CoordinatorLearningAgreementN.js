import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Image from "./lastPrint.png";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoordinatorLearningAgreementN() {

    const [learningAgreementF, setlearningAgreementF] = useState("");
    const [learningAgreementFb64, setlearningAgreementFb64] = useState("");


    let checked = false;
    let submissionSuccess = false;
    let navigate = useNavigate();
    function clickBack() {
        navigate("/toDoList");
    }


    const uploadlearningAgreementF = async (e) => {
        const learningAgreementF = e.target.files[0];
    
        setlearningAgreementFb64(await toB64(learningAgreementF));
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
    
      const uploadLearningAgreementFinal = () => {
        console.log(learningAgreementFb64);
        axios
          .post("http://localhost:8080/api/v1/application/uploadPreApprovalForm/token=" + window.localStorage.getItem("USER_TOKEN"), 
            { 
              learningAgreement: learningAgreementFb64
            } 
            )
          .then((res) => {
            if (res.data.status === true) {
              alert("Pre Approval Form Uploaded Successfully")
            }
            else {
              alert("Pre Approval Form Failed to Upload")
            }
          }).catch((err)=> {
    
            alert("Pre Approval Form Failed to Upload")
          });
      }

    function clickPrint(){
        fetch("ErasmusLearningAgreement.docx").then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Erasmus Learning Agreement.docx';
                alink.click();
            })
        })
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
                    <header style={{ fontSize: '50px', color: '#FBFCF8' }}>Learning Agreement</header>
                    <br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Download Learning Agreement </header>
                    <br></br>
                    <img id="printImage" src={Image} onClick={clickPrint} style={{cursor: 'pointer'}}></img>
                    <br></br><br></br>
                    
                   <br></br><br></br><br></br>
                    <Button onClick={uploadLearningAgreementFinal} style={{ margin: '1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
                        Approve
                    </Button>
                    <Button onClick={uploadLearningAgreementFinal} style={{ margin: '1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
                        Disapprove
                    </Button>
                </div>

                <div class="col-md-2">

                </div>

            </div>
            <DefaultFooter />
        </div>
    );
}