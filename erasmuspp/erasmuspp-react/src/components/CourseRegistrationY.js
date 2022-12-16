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

export default function CourseRegistrationY() {

  const [inputFields, setInputFields] = useState([{ courseIndex: "New Course "}])
  const [coursesSize, setCoursesSize] = useState(2);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.courseIndex] = event.target.value;
    setInputFields(data);
  }

  const addFields = (index) => {
    setCoursesSize(coursesSize + 1);

    let newfield = { courseIndex: "New Course" }

    setInputFields([...inputFields, newfield])
  }

  const removeFields = (index) => {
    setCoursesSize(coursesSize - 1);
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid" >
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <h3 className="pt-4" style={{ color: "#f4eff2" }}>
              <br />
              Course Registration
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <h5 className="pt-4" style={{ color: "#f4eff2" }}>
              Bilkent Courses:
            </h5>
            <div class="form-group">
              {inputFields.map((input, index) => {
                return (
                  <div key={index}>
                    <input class="form-control mb-4"
                     style={{width: "14rem", height: "2rem"}}
                      id="profileScreenEmail"
                      aria-describedby="emailHelp"
                      placeholder={input.courseIndex}
                      onChange={event => handleFormChange(index, event)} />
                  </div>
                )
              })}
            </div>
            <Button onClick={() => addFields(coursesSize)}
              className='mt-3'
              style={{ backgroundColor: "#3C7479", width: "13rem" }}>Add Bilkent Course</Button>
            <Button onClick={() => removeFields(coursesSize)}
              className='mt-3'
              style={{ backgroundColor: "#3C7479", width: "13rem" }}>Remove Bilkent Course</Button>
            <br />
            <LargeBreak></LargeBreak>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <h5 className='pt-4' style={{ color: '#f4eff2' }}>
              Pre-approved Courses for Equivalence:
            </h5>
            <div class="form-group">
            {inputFields.map((input, index) => {
                return (
                  <div key={index}>
                    <input class="form-control mb-4"
                      style={{width: "14rem", height: "2rem"}}
                      id="profileScreenEmail"
                      aria-describedby="emailHelp"
                      placeholder={input.courseIndex}
                      onChange={event => handleFormChange(index, event)} />
                  </div>
                )
              })}
            </div>
            <LargeBreak></LargeBreak>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}