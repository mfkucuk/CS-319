import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import AnnouncementsY from './AnnouncementsY';
import TopNavBar from './TopNavBar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function LeftSideBarAndAnnouncements(){

  const [userName, setuserName] = useState("");
  const [userRole, setuserRole] = useState("");

  const [myAppsHidden, setMyAppsHidden] = useState(false);
  const [toDoListHidden, setToDoListHidden] = useState(false);
  const [registerCandidateHidden, setRegisterCandidateHidden] = useState(false);
  const [studentsListHidden, setStudentsListHidden] = useState(false);
  const [addAnnouncement, setAddAnnouncement] = useState(false);
  
  
  useEffect(() => {
    var userToken = 
    console.log(userToken);
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then(res => setuserName(res.data.name));
  }, [userName]) 

  useEffect(() => {
    var userToken = 
    console.log(userToken);
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {setuserRole(res.data.role); })
  }, [userRole] ) 

  useEffect(() => {
    // 👇️ only runs once
    console.log(userRole);
    setButtons();
  }, []);

  let coordinatorOutput;

  function setButtons(){
    if(userRole == "ROLE_CANDIDATE"){
      setToDoListHidden(true);
      setRegisterCandidateHidden(true);
      setStudentsListHidden(true);
    }
  }

  let navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }

  function handleClickMyApplications() {
    navigate("/myApplications");
  }

  function handleClickCandidateRegistration() {
      navigate("/candidateRegistration");
  }

  function handleClickStudentsTable() {
      navigate("/studentsTable");
  }

  function handleClickToDo() {
    navigate("/toDoList");
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
              {userName}
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
              <Button hidden={myAppsHidden} onClick={handleClickMyApplications} style={{backgroundColor: "#3C7479"}} size="lg">
                My Applications
              </Button>
              <br/>
              <br/>
              <Button hidden={toDoListHidden} onClick={handleClickToDo} style={{backgroundColor: "#3C7479"}} size="lg">
                To Do List
              </Button>
              <br/>
              <br/>
              <Button  hidden={registerCandidateHidden} onClick={handleClickCandidateRegistration} style={{backgroundColor: "#3C7479"}} size="lg">
                Register Candidate
              </Button>
              <br/>
              <br/>
              <Button hidden={studentsListHidden} onClick={handleClickStudentsTable} style={{backgroundColor: "#3C7479"}} size="lg">
                Students List
              </Button>
              <LargeBreak></LargeBreak>
            </div>
          </div>
          <div class="col-md-10">
            <div id="scrollable">
              <AnnouncementsY/>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}