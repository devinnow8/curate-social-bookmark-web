import React from "react";
import { Container, Row, Col } from "reactstrap";
import addvertise from "../Add.png";
import share from "../share.png";

const Profile = () => {
  return (
    <Container>
      <div className="p-2">
        <img className="advertise" src={addvertise} alt="addvertise" />
      </div>
      <div className="profile-page">
        <div className="profile-detail">
          <img className="share" src={share} alt="share" />
          <div className="profile"></div>
          <div>
            <h5>Deep</h5>
            <h6>deep@innow8apps.com</h6>
          </div>
        </div>
        <Row xs={2} sm={3} className="layout-grid">
          <Col>
            <div className="layout-box">
              <div className="layout-img"></div>
              <h4>Title</h4>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="layout-box">
              <div className="layout-img"></div>
              <h4>Title</h4>
            </div>
          </Col>
          <Col>
            <div className="layout-box">
              <div className="layout-img"></div>
              <h4>Title</h4>
            </div>
          </Col>
          <Col>
            <div className="layout-box">
              <div className="layout-img"></div>
              <h4>Title</h4>
            </div>
          </Col>
          <Col>
            <div className="layout-box">
              <div className="layout-img"></div>
              <h4>Title</h4>
            </div>
          </Col>
          <Col>
            <div className="layout-box">
              <div className="layout-img"></div>
              <h4>Title</h4>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
