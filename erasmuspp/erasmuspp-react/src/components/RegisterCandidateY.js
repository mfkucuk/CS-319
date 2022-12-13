import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import SaveCandidateInfoModalPopUpY from './SaveCandidateInfoModalPopUpY';

export default function PostAnnouncementY(){
  return(
    <div style={{backgroundColor: "#C7D6D2"}}>
      <TopNavBar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 text-center" style={{backgroundColor: "#1F8F8E"}}>
                <br/><br/>
                <h3 style={{ color: '#f4eff2' }}>Personal Information:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 text-center" style={{backgroundColor: "#1F8F8E"}}>
              </div>
              <div class="col-md-2 text-center" style={{backgroundColor: "#1F8F8E"}}>
                <br/>
                <Form>
                  <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Last Name:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Date of Birth:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlTextarea4">
                    <Form.Label>Nationality:</Form.Label>
                  </Form.Group>
                </Form>
              </div>
              <div class="col-md-3 text-center" style={{backgroundColor: "#1F8F8E"}}>
                <br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Yunus Eren"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Control type="text" placeholder="Türkeri"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Control type="text" placeholder="dd/mm/yyyy"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Control type="text" placeholder="Turkey"/>
                </Form.Group>
              </div>
              <div class="col-md-4 text-center" style={{backgroundColor: "#1F8F8E"}}>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style={{backgroundColor: "#1F8F8E"}}>
                <br/>
                <h3 style={{ color: '#f4eff2' }}>Student Information:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 text-center" style={{backgroundColor: "#1F8F8E"}}>
                </div>
                <div class="col-md-2 text-center" style={{backgroundColor: "#1F8F8E"}}>
                  <br/>
                  <Form>
                    <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlInput1">
                      <Form.Label>Student ID No.:</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Department/Class:</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlTextarea2">
                      <Form.Label>Cumulative GPA:</Form.Label>
                    </Form.Group>
                  </Form>
                </div>
                <div class="col-md-3 text-center" style={{backgroundColor: "#1F8F8E"}}>
                  <br/>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Control type="text" placeholder="22001842"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Control type="text" placeholder="Computer Science"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Control type="text" placeholder="3.21"/>
                  </Form.Group>
                </div>
                <div class="col-md-4 text-center" style={{backgroundColor: "#1F8F8E"}}>
              </div>
            </div>
              <div class="row">
                <div class="col-md-12 text-center" style={{backgroundColor: "#1F8F8E"}}>
                  <br/><br/>
                  <SaveCandidateInfoModalPopUpY/>
                  <br/><br/><br/><br/>
                </div>
              </div>
            </div>
          <div class="col-md-2">
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}