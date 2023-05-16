import { Col, Container, Row } from "react-bootstrap";

import BreadcrumbNav from "../BreadCrumNav";

const CreateOwner = () => {
  return (
    <>
      {" "}
      <Container>
        <BreadcrumbNav />
        <section className="profile-section mb-3 mb-md-5">
          <div className="title d-flex justify-content-between align-items-center pb-3">
            <h1 class="mb-0">Create New Owner Profile</h1>
          </div>
          <Row className="justify-content-center">
            <Col md={8}>
              <div class="from-group">
                <label for="name" class="form-label">
                  Owners Name
                </label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="name"
                  placeholder="Enter Name"
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
                  placeholder="Enter Email ID"
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
                  placeholder="Enter Phone Number"
                />
              </div>
              <div class="from-group">
                <label for="territory" class="form-label">
                  Territory
                </label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="territory"
                  placeholder="Enter Territory"
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
export default CreateOwner;
