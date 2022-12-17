import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AnnouncementCardBreakY from './AnnouncementCardBreakY';
import AnnouncementsModalPopUpY from './AnnouncementsModalPopUpY';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function AnnouncementsY() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setAnnouncements(res.data);
      })
      .catch(err=>{
        console.log(err)
      })

  }, [])


  let navigate = useNavigate();
  function handleClick() {
    navigate("/addAnnouncement");
  }
  
  return (
    <div style={{backgroundColor: "#1F908F"}}>
      <Card style={{backgroundColor: "#C7D6D2"}}>
        <Card.Body>
          <Card.Title>
            <div style={{ display: "flex" }}>
            <h1>Announcements</h1>
            <Button onClick={handleClick} style={{ marginLeft: "auto", backgroundColor: "#3C7479" }}>
              Add New Announcement+
            </Button>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>

      <Row xs={2} md={1} className="g-4">
        <AnnouncementCardBreakY/>
        {announcements.map(announcement => (
          <Col md={{ span: 10, offset: 1 }}>
            <Card style={{backgroundColor: "#F4EFF2", width: "65rem"}}>
              <Card.Body>
                <Card.Title>{announcement.title}</Card.Title>
                <Card.Text>
                  {announcement.body}
                </Card.Text>
              </Card.Body>
              <AnnouncementsModalPopUpY title = {announcement.title} body = {announcement.body} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
