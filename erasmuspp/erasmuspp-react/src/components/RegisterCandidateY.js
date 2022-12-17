import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import SaveCandidateInfoModalPopUpY from './SaveCandidateInfoModalPopUpY';
import { useNavigate } from 'react-router-dom';

export default function PostAnnouncementY() {

  let navigate = useNavigate();

  function clickBack() {
    navigate("/main");
  }

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
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br /><br />
                <h3 style={{ color: '#f4eff2' }}>Personal Information:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
              <div class="col-md-2 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateFirstName">
                    <Form.Label>First Name:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateLastName">
                    <Form.Label>Last Name:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateDoB">
                    <Form.Label>Date of Birth:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateNationality">
                    <Form.Label>Nationality:</Form.Label>
                  </Form.Group>
                </Form>
              </div>
              <div class="col-md-4 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form.Group className="mb-3" controlId="registerCandidateFirstNameForm">
                  <Form.Control type="text" placeholder="Yunus Eren" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateLastNameForm">
                  <Form.Control type="text" placeholder="Türkeri" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateDoBForm">
                  <Form.Control type="text" placeholder="dd/mm/yyyy" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateNationalityForm">
                  <Form.Control type="text" placeholder="Turkey" />
                </Form.Group>
              </div>
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <h3 style={{ color: '#f4eff2' }}>Student Information:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
              <div class="col-md-2 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateStudentID">
                    <Form.Label>Student ID No.:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateDepartment">
                    <Form.Label>Department/Class:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandiateBilkentEmail">
                    <Form.Label>Bilkent E-mail:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateCumGPA">
                    <Form.Label>Cumulative GPA:</Form.Label>
                  </Form.Group>
                </Form>
              </div>
              <div class="col-md-4 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form.Group className="mb-3" controlId="registerCandidateStudentIDForm">
                  <Form.Control type="text" placeholder="22001842" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateDepartmentForm">
                  <Form.Control type="text" placeholder="Computer Science" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateBilkentEmailForm">
                  <Form.Control type="text" placeholder="eren.turkeri@ug.bilkent.edu.tr" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateCumGPAForm">
                  <Form.Control type="text" placeholder="3.21" />
                </Form.Group>
              </div>
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br /><br />
                <SaveCandidateInfoModalPopUpY />
                <br /><br /><br /><br />
              </div>
            </div>
          </div>
          <div class="col-md-2">
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}