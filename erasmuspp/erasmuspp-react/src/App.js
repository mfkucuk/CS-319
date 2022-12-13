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
      </Routes>  
    </>
  );
}

export default App;
