import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbNav from "src/components/BreadcrumbNav";
import { NavLink } from "react-router-dom";

import userPic from "../../../assets/images/dummy/user-img.jpg"

function UserDetails() {
  return (
    <Container>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">My Profile</h1>
          <NavLink className="theme-btn small-btn">Edit</NavLink>
        </div>
        <Row>
          <Col md={4}>
            <div className="profile-pic d-flex align-items-center justify-content-center mx-auto mb-4 mb-md-0">
              <img src={userPic} className="rounded-circle overflow-hidden" />
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <div class="field">
                  <p className="muted-text small-text mb-1 mb-md-2">Name</p>
                  <h4>Damon Gilbert</h4>
                </div>
              </Col>
              <Col md={6}>
                <div class="field">
                  <p className="muted-text small-text mb-1 mb-md-2">Mobile Number</p>
                  <h4>(012) 345-6789</h4>
                </div>
              </Col>
              <Col xs={12}>
                <hr />
              </Col>
              <Col md={6}>
                <div class="field">
                  <p className="muted-text small-text mb-1 mb-md-2">Email id</p>
                  <h4>damon.g@xyz.com</h4>
                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </section>
    </Container>
  );
}
export default UserDetails;
