import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function MyApplicationsN() {


    const [myApplications, setmyAnnouncements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/application/token=" + window.localStorage.getItem("USER_TOKEN"))
      .then(res => {
        setmyAnnouncements(res.data);
      })
      .catch(err=>{
        console.log(err)
      })

  }, [])


    let navigate = useNavigate();
    const handleClickMyApplication = (id) => {
        window.localStorage.setItem("LAST_APPLICATION", id);
        navigate("/myApplication");
    }
    function newApplication(){

        navigate("/editApplicationForm");
    }

    function clickBack(){
        navigate("/main");
    }
    return (
        <div>
            <TopNavBar>

            </TopNavBar>
            <div class="container-fluid">
                <div class="row" style={{ background: "#A7DFD7", }}>
                    <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
                        <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
                            Go Back
                        </Button>
                    </div>
                    <div class="col-md-8" style={{
                        display: 'grid',
                        justifyContent: 'center',
                        height: '100vh',
                        background: "#A7DFD7",
                        paddingBottom: '50px'
                    }}>
                        <div>
                            <header style={{
                                justifySelf: 'center',
                                alignItems: 'center',
                                fontSize: '50px',
                                padding: '50px',
                            }}><b>My Applications</b></header>
                        </div>


                        <Form id="scrollableMyApps" style={{
                            width: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 'auto',
                            background: '#3C8480',
                            padding: '50px',

                        }}>
                            {myApplications.map((attributes) => (
                                <Card
                                    key= {attributes.id}
                                    text={attributes.body}
                                    style={{ width: '18rem', background: "#EB9181", margin: 'auto', alignItems: 'center' }}
                                    className="mb-2"
                                >
                                    <Card.Header>{attributes.id}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{attributes.title} Card Title </Card.Title>
                                        <Card.Text>
                                            {attributes.body}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Button onClick={() =>handleClickMyApplication(attributes.id)} style={{
                                            textAlign: 'center',
                                        }}>
                                            Go to Application
                                        </Button>
                                    </Card.Footer>
                                </Card>

                            ))}

                        </Form>
                        <br></br>
                        <div class="col text-center">
                                <Button onClick= {newApplication}>
                                    New Application
                                </Button>
                            </div>
                    </div>
                    <div class="col-md-2">

                    </div>
                </div>
            </div>
            <DefaultFooter>

            </DefaultFooter>
        </div>
    );
}
