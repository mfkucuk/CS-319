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
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak/>
          </div>
          <div class="col-md-2" style={{backgroundColor: "#1F8F8E"}}>
            <br/>
            <Form>
              <Form.Group className="ps-4" controlId="exampleForm.ControlInput1">
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

              <Form.Group className="ps-4" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Student Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditFirstName">
                <Form.Label>Student ID No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLastName">
                <Form.Label>Department/Class:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Cumulative GPA:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Contact Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditFirstName">
                <Form.Label>University E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLastName">
                <Form.Label>Personal E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Mobile Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Local Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Postal Address:</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-2" style={{backgroundColor: "#1F8F8E"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3}  placeholder="Type announcement details here"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
              <Form.Control as="textarea" rows={3}  placeholder="Type announcement details here"/>
            </Form.Group>
          </div>
          <div class="col-md-2" style={{backgroundColor: "#1F8F8E"}}>

          </div>
          <div class="col-md-2" style={{backgroundColor: "#1F8F8E"}}>
            <br/><br/>
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
              aria-label="Search"
            />
            <Button style={{backgroundColor: "#3C7479"}}>Search</Button>
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