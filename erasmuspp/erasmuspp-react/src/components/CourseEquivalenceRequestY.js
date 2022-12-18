import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function CourseEquivalenceRequestY() {

  let navigate = useNavigate();
  function clickBack() {
    navigate("/courseRegistration");
  }

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid" >
        <div class="row">
        <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <h3 className="pt-4" style={{ color: "#f4eff2" }}>
              <br />
              Course Equivalence Request
              <br/><br/>
            </h3>
            <div class='row'>
              <div class="col-md-1">
              </div>
              <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
                <h5 className="pt-4" style={{ color: "#f4eff2" }}>
                  Course Type:
                </h5>
              </div>
              <div class="col-md-2 mt-4" style={{ backgroundColor: "#1F8F8E" }}>
                <Form.Check
                  inline
                  label="Mandatory"
                  name="group1"
                  type='radio'
                  id={`inline-radio-1`}
                  className="ms-1" />
                <br />
              </div>
              <div class="col-md-2 mt-4" style={{ backgroundColor: "#1F8F8E" }}>
                <Form.Check
                  inline
                  label="Elective"
                  name="group1"
                  type='radio'
                  id={`inline-radio-1`}
                  className="ms-1" />
              </div>
            </div>
            <div class='row'>
              <div class="col-md-1">
              </div>
              <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
                <h5 className="pt-4" style={{ color: "#f4eff2" }}>
                  Instructor Info:
                </h5>
              </div>
              <div class="col-md-3 mt-3" style={{ backgroundColor: "#1F8F8E" }}>
                <input class="form-control" id="profileScreenEmail" aria-describedby="emailHelp" placeholder="Instructor name" />
              </div>
              <div class="col-md-3 mt-3" style={{ backgroundColor: "#1F8F8E" }}>
                <input class="form-control" id="profileScreenEmail" aria-describedby="emailHelp" placeholder="Instructor e-mail" />
              </div>
            </div>
            <div class='row'>
              <div class="col-md-1">
              </div>
              <div class="col-md-6 ps-4 text-start" style={{ color: "#f4eff2" }}>
                *Only necessary if the course type is mandatory*
              </div>
            </div>
            <div class='row'>
              <div class="col-md-1">
              </div>
              <div class="col-md-4" style={{ color: "#f4eff2" }}>
                <br /><br />
                Upload Host University Course Syllabus
              </div>
            </div>
            <div class='row'>
              <div class="col-md-1">
              </div>
              <div class="col-md-4 ms-3" style={{ color: "#f4eff2" }}>
                <Form.Control type="file" size="lg" />
              </div>
            </div>
            <div class='row'>
              <div class="col-md-1">
              </div>
              <div class="col-md-4 ms-3 text-start" style={{ color: "#f4eff2" }}>
                <br /><br />
                Additional Information (optional)
              </div>
            </div>
            <div class='row'>
              <div class="col-md-1">
              </div>
              <div class="col-md-4 ms-3">
                <Form.Control as="textarea" rows={3} placeholder="Add any additional information here.." />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 text-center">
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br/><br/><br/><br/>
            <Button style={{ backgroundColor: "#3C7479", width: "10rem", height: "3rem"}}>
              Submit
            </Button>
            <LargeBreak></LargeBreak>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}