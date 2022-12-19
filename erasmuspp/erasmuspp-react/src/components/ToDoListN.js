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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';

export default function ToDoListN() {

    let navigate = useNavigate();

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/application/todo/token=" + window.localStorage.getItem("USER_TOKEN"))
          .then(res => {
            setApplications(res.data);
          })
          .catch(err=>{
            console.log(err)
          })
    
      }, [])
    
    function applyFilters() {
        //TODO
    }

    function approve(applicationId, stage) {
        stage++;
        axios.put("http://localhost:8080/api/v1/application/approve/applicationId=" + applicationId, stage)
          .then(res => {
            if(res === 1)
            {
                alert("Application approved!")
            }
            else{
                alert("Application approve failed!")
            }          })
          .catch(err=>{
            console.log(err)
          })
    }

    function disapprove(applicationId) {
        axios.put("http://localhost:8080/api/v1/application/disapprove/applicationId=" + applicationId)
          .then(res => {
            if(res === 1)
            {
                alert("Application disapproved!")
            }
            else{
                alert("Application disapprove failed!")
            }          })
          .catch(err=>{
            console.log(err)
          })
    }

    function view(stage, applicationId) {
        window.localStorage.setItem("LAST_APPLICATION", applicationId)
        if(stage === 1){
            navigate("/coordinatorViewApplication")
        }
        else if(stage === 2){
            navigate("/coordinatorCourseRegistration")
        }
        else if(stage === 3){
            navigate("/coordinatorPreApprovalForm")
        }
        else if(stage === 4){
            navigate("/coordinatorLearningAgreement")
        }
        else{
            alert("Application is successful. No further action is needed.")
        }
    }

    function clickBack() {
        navigate("/main");
    }

    // function clickView() {
    //     navigate("/coordinatorViewApplication")
    // }
    return (
        <div>
            <TopNavBar />
            <div class="container-fluid" style={{ height: "100vh", backgroundColor: '#A7DFD7' }}>
                <div class="row">

                    <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
                        <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
                            Go Back
                        </Button>
                    </div>

                    <div class="col-md-3" style={{ padding: '40px' }}>
                        <header class="col text-center" style={{ color: 'white', padding: '40px', fontSize: '30px' }}><b>Filtered Applications</b></header>
                        <Form id="scrollable" style={{ height: '70vh', background: '#3C8480', padding: '50px' }}>
                            {applications.map((variant) => (
                                <Card
                                    style={{ width: '26rem', background: "#EB9181", margin: '10px' }}
                                >
                                    <Card.Header>Application for {variant.choice1}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Semester: {variant.semester} </Card.Title>
                                        <Card.Text>
                                            Current Stage: {variant.stage}
                                        </Card.Text>
                                        <Card.Text>
                                            Pre-Approval Status: {variant.ispreapprovalapproved ? 'Yes' : 'No'}
                                        </Card.Text>
                                        <Card.Text>
                                            Equivalence: {variant.isequivalanceapproved ? 'Yes' : 'No'}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{ alignContent: 'center', justifyContent: 'center', }}>
                                        <Button onClick={() => view(variant.stage, variant.id)} style={{ textAlign: 'left', margin: '5px' }}>
                                            View
                                        </Button>
                                        <Button onClick={ () => approve(variant.id, variant.stage)} style={{ textAlign: 'right', margin: '5px' }}>
                                            Approve
                                        </Button>
                                        <Button onClick={ () => disapprove(variant.id) } style={{ textAlign: 'right', margin: '5px' }}>
                                            Disapprove
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </Form>

                    </div>

                    <div class="col-md-1">

                    </div>

                    <div class="col-md-2" style={{ paddingTop: '100px', textAlign: 'right' }}>
                        <FormText style={{ fontSize: '20px', color: 'black' }}>Stage: </FormText>
                        <br></br><br></br>
                        <FormText style={{ fontSize: '20px', color: 'black' }}>Erasmus Semester: </FormText>
                    </div>

                    <div class="col-md-2" style={{ paddingTop: '100px', textAlign: 'left' }}>
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

            <DefaultFooter />
        </div>
    );
}