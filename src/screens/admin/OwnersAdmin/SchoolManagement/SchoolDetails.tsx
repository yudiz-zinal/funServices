import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import eyeHide from "../../../../assets/images/icon/eye-hide-icon.svg";
import BreadcrumbNav from "src/components/BreadcrumbNav";

const SchoolDetails = () => {
  return (
    <>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">School Details</h1>
          <div className="d-flex align-items-center">
            <NavLink to="/school-management/create" className="theme-btn dark-btn small-btn me-2">Edit</NavLink>
            <NavLink className="theme-btn small-btn">Delete</NavLink>
          </div>
        </div>
        <Row>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">School Name</p>
              <h4>St. Xavier's School</h4>
            </div>
          </Col>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Item Price Level
              </p>
              <h4>2</h4>
            </div>
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
          <h2>Location Details</h2>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                City
              </p>
              <h4>St. Xavier's School</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                State
              </p>
              <h4>California</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Zip Code
              </p>
              <h4>94016</h4>
            </div>
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
          <h2>Volunteer Details</h2>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Volunteer ID
              </p>
              <h4>12345</h4>
            </div>
          </Col>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Password
              </p>
              <h4 className="d-flex align-items-center">
                <span className="mt-1">*********</span>
                <img src={eyeHide} alt="eyeHide" className="ms-3 ms-md-4" />
              </h4>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default SchoolDetails;
