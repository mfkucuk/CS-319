import './App.css';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import PostAnnouncementY from './components/PostAnnouncementY';
import MyApplicationsN from './components/MyApplicationsN';
import RegisterCandidateY from './components/RegisterCandidateY';
import StudentsTableY from './components/StudentsTableY';
import MyApplicationY from './components/MyApplicationY';
import ApplicationFormEditY from './components/ApplicationFormEditY';
import ApplicationFormViewY from './components/ApplicationFormViewY';
import ToDoListN from './components/ToDoListN';
import RoadmapY from './components/RoadmapY';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" exact element = {<LoginScreen />}> </Route>
        <Route path ="/login" element = {<LoginScreen />}> </Route>
        <Route path ="/main" element = {<MainScreen />}> </Route>
        <Route path ="/profile" element = {<ProfileScreen />}> </Route>
        <Route path ="/addAnnouncement" element = {<PostAnnouncementY />}> </Route>
        <Route path ="/myApplications" element = {<MyApplicationsN />}> </Route>
        <Route path ="/candidateRegistration" element = {<RegisterCandidateY />}> </Route>
        <Route path ="/studentsTable" element = {<StudentsTableY />}> </Route>
        <Route path ="/myApplication" element = {<MyApplicationY />}> </Route>
        <Route path ="/editApplicationForm" element = {<ApplicationFormEditY/>}> </Route>
        <Route path ="/viewApplicationForm" element = {<ApplicationFormViewY/>}> </Route>
        <Route path ="/toDoList" element = {<ToDoListN/>}> </Route>
        <Route path ="/roadmap" element = {<RoadmapY/>}> </Route>
      </Routes>  
    </>
  );
}

export default App;
