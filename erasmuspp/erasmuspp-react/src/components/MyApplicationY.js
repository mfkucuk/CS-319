import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import UploadFileModalPopUpY from './UploadFileModalPopUp';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function MyApplicationY(){
  let navigate = useNavigate();
  function handleClickEditApplicationForm() {
      navigate("/editApplicationForm");
  }

  function handleClickViewApplicationForm() {
    navigate("/viewApplicationForm");
  }

  return(
    <div style={{backgroundColor: "#C7D6D2"}}>
      <TopNavBar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8 text-center" style={{backgroundColor: "#1F8F8E"}}>
            <br/><br/>
            <h3 style={{ color: '#f4eff2' }}>My Application</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>
          </div>
          <div class="col-md-3" style={{backgroundColor: "#1F8F8E"}}>
            <Form.Group controlId="uploadStatementofPurposeForm" className="mb-3">
              <Form.Label style={{color: '#f4eff2'}}>Upload Statement of Purpose</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
            <br/>
            <Form.Group controlId="uploadCVForm" className="mb-3">
              <Form.Label style={{color: '#f4eff2'}}>Upload CV</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
            <br/>
            <Form.Group controlId="uploadApplicationForm" className="mb-3">
              <Form.Label style={{color: '#f4eff2'}}>Upload Application Form</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
            <div className='pt-2'>
              <Button onClick={handleClickEditApplicationForm} style={{backgroundColor: "#3C7479", width: "13rem"}}>
                Fill Application Form
              </Button>
            </div>
            <div className='pt-2'>
              <Button onClick={handleClickViewApplicationForm} style={{backgroundColor: "#3C7479", width: "13rem"}}>
                View Application Form
              </Button>
            </div>
          </div>
          <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>
            <br/>
            <UploadFileModalPopUpY/>
            <br/><br/><br/>
            <UploadFileModalPopUpY/>
            <br/><br/><br/>
            <UploadFileModalPopUpY/>             
          </div>
          <div class="col-md-3 text-center" style={{backgroundColor: "#1F8F8E"}}>

          </div>
          <div class="col-md-2">
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8 text-center" style={{backgroundColor: "#1F8F8E"}}>

          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}