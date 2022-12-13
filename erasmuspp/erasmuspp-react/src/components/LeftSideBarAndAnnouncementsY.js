import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import AnnouncementsY from './AnnouncementsY';
import TopNavBar from './TopNavBar';
import { useNavigate } from "react-router-dom";

export default function LeftSideBarAndAnnouncements(){
  let navigate = useNavigate();
  function handleClick() {
      navigate("/profile");
  }

  let navigateMyApplications = useNavigate();
    function handleClickMyApplications() {
        navigate("/myApplications");
    }

  return (
    <div>
      <TopNavBar/>
      <div class="container-fluid" style={{backgroundColor: "#1F908F"}}>
        <div class="row">
          <div class="col-md-2" style={{backgroundColor: "#A7DFD7"}}>
            <br/>
            <br/>
            <view style={{padding: 40, alignSelf: 'flex-start'}}>
              <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"/>
            </view>
            <p style={{textAlign: "center"}}>
              Username
              <br/>
              <br/>
              <br/>
            </p>	
            <div className="d-grid gap-2">
              <Button onClick={handleClick} style={{backgroundColor: "#3C7479"}} size="lg">
                Profile
              </Button>
              <br/>
              <br/>
              <Button onClick={handleClickMyApplications} style={{backgroundColor: "#3C7479"}} size="lg">
                My Applications
              </Button>
              <LargeBreak></LargeBreak>
            </div>
          </div>
          <div class="col-md-10">
            <div id="scrollable">
              <AnnouncementsY/>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
    
  );
}