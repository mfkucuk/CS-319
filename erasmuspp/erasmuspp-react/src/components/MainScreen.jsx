import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import LeftSideBarAndAnnouncements from './LeftSideBarAndAnnouncementsY';


export default function MainScreen(){

  return (
    <div>
      <TopNavBar/>
      <LeftSideBarAndAnnouncements/>
      
      <DefaultFooter/>
      
    </div>
  );
  
}