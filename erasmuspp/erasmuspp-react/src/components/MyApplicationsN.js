import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from "react-router-dom";

export default function MyApplicationsN() {
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
                            {[
                                'Primary',
                                'Secondary',
                                'Success',
                                'Danger',
                                'Warning',
                                'Info',
                                'Light',
                                'Dark',
                            ].map((variant) => (
                                <Card
                                    key={variant}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '18rem', background: "#EB9181", margin: 'auto', alignItems: 'center' }}
                                    className="mb-2"
                                >
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{variant} Card Title </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
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
