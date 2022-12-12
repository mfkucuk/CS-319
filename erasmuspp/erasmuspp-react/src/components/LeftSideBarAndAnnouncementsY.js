import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import AnnouncementsY from './AnnouncementsY';
import TopNavBar from './TopNavBar';

export default function LeftSideBarAndAnnouncements(){
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
              <Button style={{backgroundColor: "#3C7479"}} size="lg">
                Profile
              </Button>
              <br/>
              <br/>
              <Button style={{backgroundColor: "#3C7479"}} size="lg">
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