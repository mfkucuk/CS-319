import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';


export default function LeftSideBarAndAnnouncements(){
  return (
    <div class="container-fluid">
	    <div class="row">
        <div class="col-md-2" style={{backgroundColor: "#55B5C8"}}>
          <br/>
          <br/>
          <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
          <p>
            h1. Lorem ipsum dolor sit amet.
          </p>	
          <Button variant="primary">Profile</Button>
          <br/>
          <br/>
          <Button variant="primary">My Applications</Button>
          <LargeBreak></LargeBreak>
        </div>
        <div class="col-md-10">

        </div>
      </div>
    </div>
    
  );
}