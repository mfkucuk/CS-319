import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function MyApplicationsN() {


    const [myApplications, setmyAnnouncements] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setmyAnnouncements(res.data);
      })
      .catch(err=>{
        console.log(err)
      })

  }, [])


    let navigate = useNavigate();
    function handleClickMyApplication() {
        navigate("/myApplication");
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
                                        <Button onClick={handleClickMyApplication} style={{
                                            textAlign: 'center',
                                        }}>
                                            Go to Application
                                        </Button>
                                    </Card.Footer>
                                </Card>

                            ))}
                            <div class="col text-center">
                                <Button>
                                    Apply
                                </Button>
                            </div>

                        </Form>
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
