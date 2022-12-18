import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import SaveCandidateInfo from './SaveCandidateInfoModalPopUpY';
import Table from 'react-bootstrap/Table';


export default function PostAnnouncementY(){
  
  let navigate = useNavigate();

  function clickBack() {
    navigate("/main");
  }

  return(
    <div style={{backgroundColor: "#C7D6D2"}}>
      <TopNavBar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 text-center" style={{backgroundColor: "#1F8F8E"}}>
                <br/><br/>
                <h3 style={{ color: '#f4eff2' }}>Registered Students:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>
              </div>
              <div class="col-md-10">
                <br/>
                <Table responsive striped bordered hover variant="#b6f1cf">
                  <thead>
                    <tr>
                      <th>#</th>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>2</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>3</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>4</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div class="col-md-1 text-center" style={{backgroundColor: "#1F8F8E"}}>
              </div>
            </div>
              <div class="row">
                <div class="col-md-12 text-center" style={{backgroundColor: "#1F8F8E"}}>
                  <br/><br/><br/><br/><br/><br/>
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