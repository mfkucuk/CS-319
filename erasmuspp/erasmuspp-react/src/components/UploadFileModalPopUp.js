import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UploadFileModalPopUpY() {
  const [show, setShow] = useState(false);
  const [buttonIndex, changeButtonIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let buttonName;

  if (buttonIndex == 0){
    buttonName = "Upload Statement of Purpose"
  }
  return (
    <>
      <Button style={{backgroundColor: "#3C7479"}} onClick={handleShow}>
        {buttonName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>
            Additional button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}