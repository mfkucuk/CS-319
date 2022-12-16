import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideBarAndAnnouncements from './LeftSideBarAndAnnouncementsY';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TopNavBar from './TopNavBar';

export default function ProfileScreen() {
  let navigate = useNavigate();
  function changeClick(){
    navigate("/changePassword");
  };

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid" >
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <br />
            <view>
              <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
            </view>
            <br />
            <h3 className="pt-4" style={{ color: "#f4eff2" }}>
              User Name
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <h3 className="pt-4" style={{ color: "#f4eff2" }}>
              User Information:
            </h3>
            <br />
            <div class="form-group">
              <label style={{ color: "#f4eff2" }} for="exampleInputEmail1">Personal E-mail Address:</label>
              <input type="email" class="form-control" id="profileScreenEmail" aria-describedby="emailHelp" placeholder="egeayan2001@gmail.com" />
              <Button className='mt-3' style={{ backgroundColor: "#3C7479" }}>Change E-Mail</Button>
            </div>
            <br />
            <div class="form-group">
              <label style={{ color: "#f4eff2" }} for="exampleInputPhone1">Phone Number:</label>
              <input type="email" class="form-control" id="profileScreenPhone" aria-describedby="emailHelp" placeholder="0531313131" />
              <Button className='mt-3' style={{ backgroundColor: "#3C7479" }}>Change Phone</Button>
            </div>
            <br /><br />
            <p style={{ color: "#f4eff2" }}>
              Date of Birth: 01.04.2001
            </p>
            <br />
            <LargeBreak></LargeBreak>
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <h3 style={{ color: '#f4eff2' }}>
              About Me:
            </h3>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"></label>
              <textarea class="form-control" id="profileScreenAboutMe" rows="4" placeholder='ABOUT ME HAKKINDA BOS ATILAN BILGI'></textarea>
            </div>
            <br />
            <Button style={{ backgroundColor: "#3C7479", width: "13rem" }}>Change About Me</Button>
            <br />
            <br />
            <Button style={{ backgroundColor: "#3C7479", width: "13rem" }} onClick={changeClick}>Change Password</Button>
            <LargeBreak></LargeBreak>
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}