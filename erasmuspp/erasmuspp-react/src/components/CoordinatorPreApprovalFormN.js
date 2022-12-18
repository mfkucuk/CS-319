import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Image from "./lastPrint.png";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoordinatorPreApprovalFormN() {
    const [preApprovalF, setpreApprovalF] = useState("");
    const [preApprovalFb64, setpreApprovalFb64] = useState("");
  
    let checked = false;
    let submissionSuccess = false;
    let navigate = useNavigate();
    function clickBack() {
        navigate("/toDoList");
    }

    const uploadpreApprovalF = async (e) => {
        const preApprovalF = e.target.files[0];
    
        setpreApprovalFb64(await toB64(preApprovalF));
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
    
      const uploadPreApprovalFinal = () => {
        console.log(preApprovalFb64);
        axios
          .post("http://localhost:8080/api/v1/application/uploadPreApprovalForm/token=" + window.localStorage.getItem("USER_TOKEN"), 
            { 
              preApprovalForm: preApprovalFb64
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


    const clickPrint = () =>{
        fetch("PreApprovalForm.docx").then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Pre Approval Form.docx';
                alink.click();
            })
        })
    
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
                    <header style={{ fontSize: '18px', color: 'black' }}>Download Pre-Approval Form </header>
                    <br></br>
                    <img id="printImage" src={Image} onClick ={clickPrint} style={{cursor: 'pointer'}}></img>
                    <br></br><br></br>
                   
                    <br></br><br></br><br></br>
                    <Button onClick={uploadPreApprovalFinal} style={{ margin: '1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
                        Approve
                    </Button>
                    <Button onClick={uploadPreApprovalFinal} style={{ margin:'1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
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