import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';

export default function PostAnnouncementY(){
  return(
    <div style={{backgroundColor: "#C7D6D2"}}>
      <TopNavBar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            
          </div>
          <div class="col-md-8 text-center" style={{backgroundColor: "#1F8F8E"}}>
            <br/><br/>
            <h1 style={{ color: '#f4eff2' }}>Post Announcement</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak/>
          </div>
          <div class="col-md-4" style={{backgroundColor: "#1F8F8E"}}>
            <br/>
            <Form>
              <Form.Group className="mb-3" controlId="postAnnouncementTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control type='text' placeholder="Announcement Title"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="postAnnouncementDescription">
                <Form.Label>Announcement Description:</Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder="Type announcement details here"/>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>

          </div>
          <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>
            <br/><br/>
            <Form>
              <Form.Group className="mb-3" controlId="postAnnouncementDepartment"  style={{textAlign: 'left'}}>
                <Form.Label>Department:</Form.Label>
              </Form.Group>
              <br/>
              <Form.Group className="mb-3" controlId="postAnnouncementCountry"  style={{textAlign: 'left'}}>
                <Form.Label>Country:</Form.Label>
              </Form.Group>
              <br/>
              <Form.Group className="mb-3" controlId="postAnnouncementErasmusSemester"  style={{textAlign: 'left'}}>
                <Form.Label>Erasmus Semester:</Form.Label>
              </Form.Group>
              <br/>
              <Form.Group className="mb-3" controlId="postAnnouncementUniversity"  style={{textAlign: 'left'}}>
                <Form.Label>University:</Form.Label>
              </Form.Group>
              <br/>
              <Form.Group className="mb-3" controlId="postAnnouncementNameID"  style={{textAlign: 'left'}}>
                <Form.Label>Query by Name/ID:</Form.Label>
              </Form.Group>
            </Form>
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
            <Button style={{backgroundColor: "#3C7479"}}>Post Announcement</Button>
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}