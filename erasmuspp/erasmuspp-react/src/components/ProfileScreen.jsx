import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideBarAndAnnouncements from './LeftSideBarAndAnnouncementsY';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TopNavBar from './TopNavBar';


export default function ProfileScreen(){
    return(
      <div style={{backgroundColor: "#2E2E2B"}}>
       <TopNavBar/>
       
       <div class="container-fluid" >
        
	    <div class="row">
      <div class="col-md-3">

      </div>  
        <div class="col-md-2" style={{backgroundColor: "#be402d"}}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p style = {{textAlign: 'center'}}>
            User Information
          </p>	

          <br/>
          <br/>
          <br/>

          <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="egeayan2001@gmail.com"/>
      
  </div>
  <br/>

  <div class="form-group">
    <label for="exampleInputPhone1">Phone Number</label>
    <input type="email" class="form-control" id="exampleInputPhone1" aria-describedby="emailHelp" placeholder="0531313131"/>
  </div>
          <br/>
          
          <br/>
          
          <p>
            Date of Birth: 01.04.2001 
          </p>
          <br/>
          <p>
            Gender: Male
          </p>
          <LargeBreak></LargeBreak>
        </div>


        <div class="col-md-2" style={{backgroundColor: "#667666"}}>
          <br/>
          <br/>
          <view style={{padding: 40, alignSelf: 'flex-start', alignContent:'center'}}>
            <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"/>
          </view>
          <br/>
          <p style={{textAlign: 'center'}}>
            UserName
          </p>	

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Button>Change E-Mail</Button>
          <br/>
          <br/>
          <br/>
          
          <Button style={{}}>Change Phone</Button>

          

          
          <LargeBreak></LargeBreak>
        </div>

        <div class="col-md-2" style={{backgroundColor: "#EB9181"}}>
          <br/>
          <p style = {{textAlign: 'center', color: 'white'}}>
            About Me
          </p>	

          <div class="form-group">
          <label for="exampleFormControlTextarea1"></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='ABOUT ME HAKKINDA BOS ATILAN BILGI'></textarea>
          </div>
          <br/>
          <Button>Change About Me</Button>
          <br/>
          <br/>
          <Button>Change Password</Button>
          <LargeBreak></LargeBreak>
          
        </div>

        
        
      </div>
    </div>
      </div>


    )
}