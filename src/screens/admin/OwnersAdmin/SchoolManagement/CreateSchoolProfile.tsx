import { Col, Form, Row } from "react-bootstrap";
import BreadcrumbNav from "src/components/BreadcrumbNav";
import TextField from "src/components/TextField";

const CreateSchoolProfile = () => {
  return (
    <>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">Create New Owner Profile</h1>
        </div>
        <h2>School Information</h2>
        <div class="from-group">
          <label for="name" class="form-label">
            School Name
          </label>
          <input type="text" class="form-control input-field" id="name" placeholder="Enter Name" />
        </div>
        <Row>
          <Col md={6} lg={4}>
            <div class="from-group">
              <label for="city" class="form-label">
                City
              </label>
              <input type="text" class="form-control input-field" id="city" placeholder="Enter City" />
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div class="from-group">
              <label for="state" class="form-label">
                State
              </label>
              <input type="text" class="form-control input-field" id="state" placeholder="Enter State" />
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div class="from-group">
              <label for="zipCode" class="form-label">
                Zip Code
              </label>
              <input type="text" class="form-control input-field" id="zipCode" placeholder="Enter Zip Code" />
            </div>
          </Col>
        </Row>
        <div class="from-group">
          <label for="price" class="form-label">
            Select Item Price Level
          </label>
          <div className="d-flex flex-wrap input-check-list">
            <Form.Check inline label="1" name="price" type="radio" id="price-1" />
            <Form.Check inline label="2" name="price" type="radio" id="price-2" />
            <Form.Check inline label="3" name="price" type="radio" id="price-3" />
            <Form.Check inline label="4" name="price" type="radio" id="price-4" />
            <Form.Check inline label="5" name="price" type="radio" id="price-5" />
          </div>
        </div>
        <h2>Volunteer Details</h2>
        <div class="from-group">
          <label for="email" class="form-label">
            Volunteer ID
          </label>
          <input
            type="text"
            class="form-control input-field"
            id="email"
            placeholder="Enter Email ID"
          />
        </div>
        <Row>
          <Col md={6}>
            <div class="from-group">
              <label for="password" class="form-label input-label-fonts" >
                Create Password
              </label>
              <div class="position-relative">
                <TextField
                  type="password"
                  id="password"
                  placeHolder="Enter New Password"
                  className="form-control input-field"
                ></TextField>
                <button type="button" class="toggle-password" >
                  <img src="/images/passwordEye.png" />
                </button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div class="from-group">
              <label for="cpassword" class="form-label input-label-fonts" >
              Confirm New Password
              </label>
              <div class="position-relative">
                <TextField
                  type="password"
                  id="cpassword"
                  placeHolder="Re-Enter New Password"
                  className="form-control input-field"
                ></TextField>
                <button type="button" class="toggle-password" >
                  <img src="/images/passwordEye.png" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <button className="theme-btn small-btn me-2 me-md-4">
            Save
          </button>
          <button className="theme-btn small-btn light-btn">
            Cancel
          </button>
        </div>

      </section>
    </>
  );
};
export default CreateSchoolProfile;
