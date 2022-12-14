import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';

export default function MyApplicationsN() {
    
    return (
            <div>
            <br></br>
            <TopNavBar>

            </TopNavBar>
            <div style={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: "#A7DFD7",
                paddingBottom: '50px'
            }}>
                
                <header style={{
                    alignItems: 'center',
                    fontSize: '50px',
                    padding: '50px',
                }}><b>My Applications</b></header>

                <br></br><br></br><br></br>

                <Form id="scrollable" class="col-md-10" style={{ 
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
                            style={{ width: '18rem', background: "#EB9181", margin: 'auto', alignItems: 'center'}}
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
                                <Button style={{
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
            <DefaultFooter>
                
            </DefaultFooter>
        </div>
    );
}
