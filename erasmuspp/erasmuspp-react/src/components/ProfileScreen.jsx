import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function ProfileScreen() {
  const [userFirstNameInit, setUserFirstNameInit] = useState("");
  const [userLastNameInit, setUserLastNameInit] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userEmailInit, setUserEmailInit] = useState("");

  const [userMobilePhoneNo, setUserMobilePhoneNo] = useState("");
  const [userMobilePhoneNoInit, setUserMobilePhoneNoInit] = useState("");

  const [userDoBInit, setUserDoBInit] = useState("");

  const [userAboutMe, setUserAboutMe] = useState("");
  const [userAboutMeInit, setUserAboutMeInit] = useState("");

  const [userImageSrc, setUserImageSrc] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
      .then((res) => {
        setUserFirstNameInit(res.data.firstName);
        setUserLastNameInit(res.data.lastName);
        setUserAboutMeInit(res.data.aboutMe);
        setUserEmailInit(res.data.email);
        setUserMobilePhoneNoInit(res.data.mobilePhone);
        setUserDoBInit(res.data.dob)
      }
      )
  }, [userFirstNameInit][userAboutMeInit])


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(res => setUserImageSrc(res.data[5].url));
  }, [userImageSrc])

  const putUserEmail = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/v1/user/changeEmail/token=" + window.localStorage.getItem("USER_TOKEN"),
        {
          personalEmail: userEmail
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

  const putUserMobilePhoneNo = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/v1/user/changeMobilePhoneNo/token=" + window.localStorage.getItem("USER_TOKEN"),
        {
          mobilePhone: userMobilePhoneNo
        })
      .then((res) => {
        if (res.data === true) {
          alert("Mobile phone number updated successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        alert("Something went wrong.");
      });
  };

  const putUserAboutMe = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/v1/user/changeAboutMe/token=" + window.localStorage.getItem("USER_TOKEN"),

        userAboutMe
      )
      .then((res) => {
        if (res.data === 1) {
          alert("About me updated successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        alert("Something went wrong.");
      });
  };

  let navigate = useNavigate();
  function changeClick() {
    navigate("/changePassword");
  }

  function clickBack() {
    navigate("/main");
  }
  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid" >
        <div class="row">
          <div class="col-md-3">
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#be402d" }}>
          </div>
          <div class="row">
            <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
              <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
                Go Back
              </Button>
            </div>
            <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              <br />
              <br />
              <view>
                <img style={{ width: "12rem", height: "12rem" }} alt="Bootstrap Image Preview" src={userImageSrc} />
              </view>
              <br /><br />
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">
                  <Form.Control type="file" size="lg" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">
                  <br />
                  <Button style={{ backgroundColor: "#3C7479", width: "13rem" }}>Change Profile Photo</Button>
                </div>
              </div>
              <br />
              <h3 className="pt-4" style={{ color: "#f4eff2" }}>
                {userFirstNameInit} {userLastNameInit}
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
                <input type="email" class="form-control" id="profileScreenEmail" aria-describedby="emailHelp" placeholder={userEmailInit} onChange={(e) => setUserEmail(e.target.value)} />
                <Button onClick={putUserEmail} className='mt-3' style={{ backgroundColor: "#3C7479" }}>Change E-Mail</Button>
              </div>
              <br />
              <div class="form-group">
                <label style={{ color: "#f4eff2" }} for="exampleInputPhone1">Phone Number:</label>
                <input type="email" class="form-control" id="profileScreenPhone" aria-describedby="emailHelp" placeholder={userMobilePhoneNoInit} onChange={(e) => setUserMobilePhoneNo(e.target.value)} />
                <Button onClick={putUserMobilePhoneNo} className='mt-3' style={{ backgroundColor: "#3C7479" }}>Change Phone</Button>
              </div>
              <br /><br />
              <p style={{ color: "#f4eff2" }}>
                Date of Birth: {userDoBInit}
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
                <textarea class="form-control" id="profileScreenAboutMe" rows="4" placeholder={userAboutMeInit} onChange={(e) => setUserAboutMe(e.target.value)}></textarea>
              </div>
              <br />
              <Button onClick={putUserAboutMe} style={{ backgroundColor: "#3C7479", width: "13rem" }}>Change About Me</Button>
              <br />
              <br />
              <Button style={{ backgroundColor: "#3C7479", width: "13rem" }} onClick={changeClick}>Change Password</Button>
              <LargeBreak></LargeBreak>
            </div>
            <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
            </div>
          </div>
        </div>
        <DefaultFooter />
      </div>
    </div>
  )
}