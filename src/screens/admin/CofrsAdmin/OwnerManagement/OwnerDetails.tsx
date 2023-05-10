import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import editPic from "../../../../assets/images/icon/edit-icon.svg";
import userPic from "../../../../assets/images/dummy/user-img.jpg";
import BreadcrumbNav from "../BreadCrumNav";
const OwnerDetails = () => {
  return (
    <>
      <Container>
        <BreadcrumbNav />
        <section className="profile-section mb-3 mb-md-5">
          <div className="title d-flex justify-content-between align-items-center pb-3">
            <h1 class="mb-0">My Profile</h1>
            <div className="d-flex align-items-center">
              <NavLink className="theme-btn dark-btn small-btn me-2">Archive</NavLink>
              <NavLink className="theme-btn small-btn">Edit</NavLink>
            </div>
          </div>
          <Row>
            <Col md={4}>
              <div className="profile-pic d-flex align-items-center justify-content-center mx-auto mb-4 mb-md-0 position-relative">
                <img src={userPic} className="rounded-circle overflow-hidden" />
                <div className="edit-pic position-absolute rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                  <input
                    type="file"
                    className="position-absolute w-100 h-100 opacity-0"
                  />
                  <img src={editPic} className="w-75 h-75" />
                </div>
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
                    <p className="muted-text small-text mb-1 mb-md-2">
                      Mobile Number
                    </p>
                    <h4>(012) 345-6789</h4>
                  </div>
                </Col>
                <Col xs={12}>
                  <hr />
                </Col>
                <Col md={6}>
                  <div class="field">
                    <p className="muted-text small-text mb-1 mb-md-2">
                      Email id
                    </p>
                    <h4>damon.g@xyz.com</h4>
                  </div>
                </Col>
                <Col md={6}>
                  <div class="field">
                    <p className="muted-text small-text mb-1 mb-md-2">
                      Territory
                    </p>
                    <h4>Territory</h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};
export default OwnerDetails;
