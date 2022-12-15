import DefaultFooter from "./DefaultFooter";
import TopNavBar from "./TopNavBar";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormText from "react-bootstrap/esm/FormText";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownContext from "react-bootstrap/esm/DropdownContext";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export default function ToDoListN() {
    function applyFilters()
    {
        //TODO
    }
    
    return (
        <div>
            <TopNavBar/>
            <div class="container-fluid" style={{height: "100vh", backgroundColor: '#A7DFD7'}}>
                <div class="row">

                    <div class="col-md-2">

                    </div>

                    <div class="col-md-3" style={{padding: '40px'}}>
                        <header class="col text-center" style={{ color: 'white', padding: '40px', fontSize: '30px'}}><b>Filtered Applications</b></header>
                        <Form id="scrollable" style={{height: '70vh', background: '#3C8480', padding: '50px'}}>
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
                                    style={{ width: '18rem', background: "#EB9181", margin: '10px'}}
                                    >
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{variant} Card Title </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{alignContent: 'center', justifyContent: 'center',}}>
                                        <Button style={{textAlign: 'center',}}>
                                            Go to Application
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </Form>

                    </div>

                    <div class="col-md-1">

                    </div>

                    <div class="col-md-2" style={{paddingTop: '150px', textAlign: 'right'}}>
                        <FormText style={{fontSize: '20px', color: 'black'}}>Stage: </FormText>
                        <br></br><br></br>
                        <FormText style={{fontSize: '20px', color: 'black'}}>Erasmus Semester: </FormText>
                    </div>
                        
                    <div class="col-md-2" style={{paddingTop: '150px', textAlign: 'left'}}>
                    <Form.Select>
                            {[
                                    "Stage 1",
                                    "Stage 2",
                                    "Stage 3"
                                ].map((stage) => (
                                <option>{stage}</option>
                                ))}
                        </Form.Select>
                        <br></br>
                        <Form.Select>
                            {[
                                    "Semester 1",
                                    "Semester 2",
                                    "Semester 3"
                                ].map((stage) => (
                                <option>{stage}</option>
                                ))}
                        </Form.Select>
                        <br></br><br></br>
                        <Button onClick={applyFilters()}>
                            Apply Filters
                        </Button>
                    </div>

                </div>
            </div>

            <DefaultFooter/>
        </div>
    );
}