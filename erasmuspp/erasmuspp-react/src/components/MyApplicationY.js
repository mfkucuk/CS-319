import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import UploadFileModalPopUpY from './UploadFileModalPopUp';

export default function PostAnnouncementY(){
  
  const [buttonIndex, changeButtonIndex] = useState(0);
  
  let buttonName;
  if (buttonIndex == 0){
    buttonName = "Upload Statement of Purpose"
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
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label style={{color: '#f4eff2'}}>Large file input example</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
          </div>
          <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>
            <UploadFileModalPopUpY/>
          </div>
          <div class="col-md-2" style={{backgroundColor: "#1F8F8E"}}>
          </div>
          <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>
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