import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import LeftSideBar from './LeftSideBarAndAnnouncements';


export default function MainMenuScreen(){
  return (
    <div>
      <TopNavBar/>
      <LeftSideBar/>
      
      <DefaultFooter/>
      
    </div>
    
  );
}