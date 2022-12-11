import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';


export default function MainMenuScreen(){
  return (
    <div class="container-fluid">
	    <div class="row">
        <div class="col-md-2">
        <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
          <h1>
            h1. Lorem ipsum dolor sit amet.
          </h1>	
          <Nav defaultActiveKey="/home" className="flex-column">
          <Button variant="primary">Primary</Button>
          <br></br>
          <Button variant="primary">Primary</Button>
          </Nav>
        </div>
        <div class="col-md-10">

        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <DefaultFooter></DefaultFooter>
        </div>
      </div>
    </div>
    
  );
}