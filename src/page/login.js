import { useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import LoginOPtions from "../components/loginOptions";

function LoginPage(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Not provided");
  const [email, setEmail] = useState("Not provided");
  const [photo, setPhoto] = useState("Not provided");

  const handleClose = () => setShow(false);
  const handleShow = function (data) {
    setName(data.name);
    setEmail(data.email);
    setPhoto(data.photo);
    setShow(true);
  };
  return (
    <div>
      <Row className="mainsection">
        <Col className="leftBar" lg={7}>
          <div className="intro">
            <i class="mdi mdi-36px mdi-spin  mr-2 mdi-hexagon-slice-2"></i>

            <h1>AUTHENTICATION DOCS</h1>
            <ol>
              <li>Google</li>
              <li>Facebook</li>
            </ol>
          </div>
        </Col>
        <LoginOPtions handleShow={handleShow} />
      </Row>
      <Modal show={show} backdrop="static" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Authentication Data </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="text-muted">1. User Name</h4>
            <h4> {name}</h4>
            <hr />
            <h4 className="text-muted">2. User Email</h4>
            <h4> {email} </h4>
            <hr />
            {photo != "Not provided" && (
              <div>
                <h4 className="text-muted">User Photo</h4>{" "}
                <img src={photo} alt="user Logo"></img>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginPage;
