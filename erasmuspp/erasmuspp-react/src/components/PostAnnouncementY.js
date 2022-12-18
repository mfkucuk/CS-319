import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostAnnouncementY() {

  const [departmentNameInit, setDepartmentNameInit] = useState([]);
  const [countryInit, setCountryInit] = useState([]);
  const [erasmusSemesterInit, setErasmusSemesterInit] = useState([]);
  const [universityInit, setUniversityInit] = useState([]);


  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementTitleInit, setAnnouncementTitleInit] = useState("");
  const [announcementDescription, setAnnouncementDescription] = useState("");
  const [announcementDescriptionInit, setAnnouncementDescriptionInit] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setDepartmentNameInit(res.data));
  }, [departmentNameInit])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setCountryInit(res.data));
  }, [countryInit])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setErasmusSemesterInit(res.data));
  }, [erasmusSemesterInit])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setAnnouncementTitleInit(res.data[0].title));
  }, [announcementTitleInit])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setAnnouncementDescriptionInit(res.data[1].title));
  }, [announcementDescriptionInit])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setUniversityInit(res.data));
  }, [universityInit])

  const postAnnouncementTitle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/user/changeEmail/token=" + window.localStorage.getItem("USER_TOKEN"),
        {
          title: announcementTitle
        })
      .then((res) => {
        if (res.data === true) {
          alert("Email updated successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        alert("Something went wrong.");
      });
  };

  const postAnnouncementDescription = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/user/changeEmail/token=" + window.localStorage.getItem("USER_TOKEN"),
        {
          content: announcementDescription
        })
      .then((res) => {
        if (res.data === true) {
          alert("Email updated successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        alert("Something went wrong.");
      });
  };


  let navigate = useNavigate();
  function clickBack() {
    navigate("/main");
  }

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <h1 style={{ color: '#f4eff2' }}>Post Announcement</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak />
          </div>
          <div class="col-md-4" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="postAnnouncementTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control type='text' placeholder={announcementTitleInit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="postAnnouncementDescription">
                <Form.Label>Announcement Description:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder={announcementDescriptionInit} />
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>

          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <Form>
              <Form.Group className="mb-3" controlId="postAnnouncementDepartment" style={{ textAlign: 'left' }}>
                <Form.Label>Department:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementCountry" style={{ textAlign: 'left' }}>
                <Form.Label>Country:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementErasmusSemester" style={{ textAlign: 'left' }}>
                <Form.Label>Erasmus Semester:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementUniversity" style={{ textAlign: 'left' }}>
                <Form.Label>University:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementNameID" style={{ textAlign: 'left' }}>
                <Form.Label>Query by Name/ID:</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <Form.Select aria-label="Department Select">
              <option>Select</option>
              {
              departmentNameInit
              .map((variant) => (
              <option>{variant.title}</option>
              ))}
            </Form.Select>
            <br />
            <Form.Select aria-label="Country Select">
              <option>Select</option>
              {
              countryInit
              .map((variant) => (
              <option>{variant.title}</option>
              ))}
            </Form.Select>
            <br /><br />
            <Form.Select aria-label="Erasmus Semester Select">
              <option>Select</option>
              {
              erasmusSemesterInit
              .map((variant) => (
              <option>{variant.title}</option>
              ))}
            </Form.Select>
            <br /><br />
            <Form.Select aria-label="University Select">
              <option>Select</option>
              {
              universityInit
              .map((variant) => (
              <option>{variant.title}</option>
              ))}
            </Form.Select>
            <br /><br />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ backgroundColor: "#3C7479" }}>Search</Button>
            </Form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <br /><br /><br /><br /><br /><br /><br />
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br /><br />
            <Button onClick={postAnnouncementTitle} style={{ backgroundColor: "#3C7479" }}>Post Announcement</Button>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}