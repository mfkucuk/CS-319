import './App.css';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import MyApplicationsN from './components/MyApplicationsN';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" exact element = {<LoginScreen />}> </Route>
        <Route path ="/login" element = {<LoginScreen />}> </Route>
        <Route path ="/main" element = {<MainScreen />}> </Route>
        <Route path ="/profile" element = {<ProfileScreen />}> </Route>
        <Route path ="/myApplications" element = {<MyApplicationsN />}> </Route>
        <Route path ="/topNavBar" element = {<MainScreen />}> </Route>
      </Routes>
    
    
    </>
  );
}

export default App;
