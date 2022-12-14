import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AnnouncementCardBreakY from './AnnouncementCardBreakY';
import AnnouncementsModalPopUpY from './AnnouncementsModalPopUpY';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AnnouncementsY() {

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
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col md={{ span: 10, offset: 1 }}>
            <Card style={{backgroundColor: "#F4EFF2"}}>
              <Card.Body>
                <Card.Title >Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <AnnouncementsModalPopUpY/>
            </Card>
          </Col>
        ))}
      </Row>
      <AnnouncementCardBreakY/>
    </div>
  );
}
