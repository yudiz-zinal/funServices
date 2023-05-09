import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbNav from "src/components/BreadcrumbNav";

function UpdatePassword() {
  return (
    <Container>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">Change Password</h1>
        </div>
        <Row className="justify-content-center">
          <Col md={8}>
            <div class="from-group">
              <label for="password" class="form-label" >
                Current Password
              </label>
              <div class="position-relative">
                <input type="password" class="form-control input-field" id="password" placeholder="Please enter the current password" />
                <button type="button" class="toggle-password" >
                  <img src="/images/passwordEye.png" />
                </button>
              </div>
            </div>
            <div class="from-group">
              <label for="password" class="form-label" >
                New Password
              </label>
              <div class="position-relative">
                <input type="newPassword" class="form-control input-field" id="newPassword" placeholder="Please enter the New Password" />
                <button type="button" class="toggle-password" >
                  <img src="/images/passwordEye.png" />
                </button>
              </div>
            </div>
            <div class="from-group">
              <label for="password" class="form-label" >
                Confirm New Password
              </label>
              <div class="position-relative">
                <input type="cnewPassword" class="form-control input-field" id="cnewPassword" placeholder="Please enter the New Password" />
                <button type="button" class="toggle-password" >
                  <img src="/images/passwordEye.png" />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="theme-btn small-btn me-2 me-md-4">Save</button>
              <button className="theme-btn small-btn light-btn">Cancel</button>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
export default UpdatePassword;
