import { Col, Container, Row } from "react-bootstrap";

import "./style.scss";
import userPic from "../../../assets/images/dummy/user-img.jpg";
import editPic from "../../../assets/images/icon/edit-icon.svg";
import BreadcrumbNav from "../CofrsAdmin/BreadCrumNav";

const EditAdminProfile = () => {
  return (
    <>
      {" "}
      <Container>
        <BreadcrumbNav />
        <section className="profile-section mb-3 mb-md-5">
          <div className="title d-flex justify-content-between align-items-center pb-3">
            <h1 class="mb-0">Edit Profile Details</h1>
          </div>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="profile-pic d-flex align-items-center justify-content-center mx-auto mb-3 mb-md-4 mb-xl-5 position-relative">
                <img src={userPic} className="rounded-circle overflow-hidden" />
                <div className="edit-pic position-absolute rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                  <input
                    type="file"
                    className="position-absolute w-100 h-100 opacity-0"
                  />
                  <img src={editPic} className="w-75 h-75" />
                </div>
              </div>
              <div class="from-group">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="name"
                  placeholder="Please enter the Name"
                />
              </div>
              <div class="from-group">
                <label for="email" class="form-label">
                  Email id
                </label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="email"
                  placeholder="Please enter the email id"
                />
              </div>
              <div class="from-group">
                <label for="mobileNumber" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="mobileNumber"
                  placeholder="Please enter the Mobile Number"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="theme-btn small-btn me-2 me-md-4">
                  Save
                </button>
                <button className="theme-btn small-btn light-btn">
                  Cancel
                </button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};
export default EditAdminProfile;
