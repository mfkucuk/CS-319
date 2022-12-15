import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';

export default function ApplicationFormEditY(){

  return(
    <div style={{backgroundColor: "#C7D6D2"}}>
      <TopNavBar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8 text-center" style={{backgroundColor: "#1F8F8E"}}>
            <br/><br/>
            <h1 style={{ color: '#f4eff2' }}>Application Form</h1>
            <br/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak/>
          </div>
          <div class="col-md-2" style={{backgroundColor: "#1F8F8E"}}>
            <Form>
              <Form.Group className="ps-4" controlId="applicationFormPersonalInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Personal Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditFirstName">
                <Form.Label>First Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLastName">
                <Form.Label>Last Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDoB">
                <Form.Label>Date of Birth:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Nationality:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditStudentInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Student Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditStudentID">
                <Form.Label>Student ID No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDepartment">
                <Form.Label>Department/Class:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditCumGPA">
                <Form.Label>Cumulative GPA:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditContactInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Contact Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditUnivEmail">
                <Form.Label>University E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPersonalEmail">
                <Form.Label>Personal E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditMobilePhoneNo">
                <Form.Label>Mobile Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLocalPhoneNo">
                <Form.Label>Local Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPostalAddress">
                <Form.Label>Postal Address:</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{backgroundColor: "#1F8F8E"}}>
            <br/>
            <Form>
              <Form.Group className="pt-3 mb" controlId="applicationFormEditFirstNameForm">
                <Form.Label>Mehmet Behnan</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditLastNameForm">
                <Form.Label>Türkeri</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDoBForm">
                <Form.Label>28/05/1998</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb" controlId="applicationFormEditNationalityForm">
                <Form.Label>Turkey</Form.Label>
              </Form.Group>
              <br/>
              <Form.Group className="pt-4 mb-1" controlId="applicationFormEditStudentIDForm">
                <Form.Label>21602468</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDepartmentForm">
                <Form.Label>Management</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-3" controlId="applicationFormEditCumGPAForm">
                <Form.Label>2.77</Form.Label>
              </Form.Group>
              <br/>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditUnivEmailForm">
                <Form.Label>behnan.turkeri@ug.bilkent.edu.tr</Form.Label>
              </Form.Group>
              <Form.Group className="me-5 mb-1" controlId="applicationformEditPersonalEmailForm">
                <Form.Control placeholder="Personal E-mail Address"/>
              </Form.Group>
              <Form.Group className="me-5 mb-1" controlId="applicationFormEditMobilePhoneNoForm">
                <Form.Control placeholder="Mobile Phone Number"/>
              </Form.Group>
              <Form.Group className="me-5 mb-1" controlId="applicationFormEditLocalPhoneNoForm">
                <Form.Control placeholder="Local Phone Number"/>
              </Form.Group>
              <Form.Group className="me-5 mb-3" controlId="applicationFormEditPostalAddressForm">
                <Form.Control as="textarea" rows={4}  placeholder="Postal Address"/>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{backgroundColor: "#1F8F8E"}}>
            <Form className="pe-5">
              <Form.Group controlId="applicationFormPersonalInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Erasmus Host University Preferences:</h5></Form.Label>
              </Form.Group>
              <Form.Select aria-label="Department Select">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <br/>
              <Form.Select aria-label="Country Select">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <br/><br/>
              <Form.Select aria-label="Erasmus Semester Select">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <br/><br/>
              <Form.Select aria-label="Erasmus Semester Select">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <br/><br/>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"/>
              <Button style={{backgroundColor: "#3C7479"}}>Search</Button>
              </Form>
            </Form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div class="col-md-8 text-center" style={{backgroundColor: "#1F8F8E"}}>
            <br/><br/><br/>
            <Button style={{backgroundColor: "#3C7479"}}>Export Application Form</Button>
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}