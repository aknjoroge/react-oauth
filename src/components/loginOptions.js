import { Col, Container, Row } from "react-bootstrap";
import background from "./../assets/logo.png";

import Google from "./buttons/google";
import Twitter from "./buttons/twitter";
import Facebook from "./buttons/facebook";
import Github from "./buttons/github";
import Linkedin from "./buttons/linkedin";
import Apple from "./buttons/apple";
import Telegram from "./buttons/telegram";
import Instagram from "./buttons/instagram";
function LoginOPtions(props) {
  let { handleShow } = props;
  return (
    <Col className="sidebar" lg={5}>
      <div className="mt-5">
        <div className="p-2">
          <div className="card-body">
            <div className="p-1 imgHolder">
              <img src={background} alt="logo"></img>
            </div>
            <h2 className="title">REACT LOGIN AUTH</h2>
            <p className="text-center text-muted">
              Select an Authentication Method
            </p>
            <div className="option">
              <Google show={handleShow} />
              <hr />
              <div className="row">
                {/* <Twitter show={handleShow} /> */}
                <Instagram show={handleShow} />
              </div>
              <hr />
              <div className="row">
                <Github show={handleShow} />
              </div>
              <hr />
              <div className="row">
                <Linkedin show={handleShow} />
              </div>
              <hr />
              <div className="row">
                <Facebook show={handleShow} />
              </div>
              <hr />
              <div className="row">
                <Telegram show={handleShow} />
              </div>
              <hr />
              <div className="row">
                <Twitter />
              </div>
              <hr />
              <div className="row">
                <Apple show={handleShow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default LoginOPtions;
