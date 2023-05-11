import { Col, Form, Row } from "react-bootstrap";
import BreadcrumbNav from "src/components/BreadcrumbNav";
import TextField from "src/components/TextField";

const CreateItem = () => {
  return (
    <>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">Add New Item</h1>
        </div>
        <div class="from-group">
          <label for="name" class="form-label">
            Item Name
          </label>
          <input type="text" class="form-control input-field" id="name" placeholder="Enter Name" />
        </div>
        <div class="from-group">
          <label for="password" class="form-label input-label-fonts" >
            Item Code
          </label>
          <input type="text" class="form-control input-field" id="name" placeholder="Enter Item Code" />
        </div>
        <div class="from-group">
          <label for="password" class="form-label input-label-fonts" >
            Barcode
          </label>
          <input type="text" class="form-control input-field" id="name" placeholder="Enter Barcode Number" />
        </div>
        <div class="from-group">
          <label for="password" class="form-label input-label-fonts" >
            School’s Cost
          </label>
          <input type="text" class="form-control input-field" id="name" placeholder="Enter School’s Cost" />
        </div>
        <Row>
          <Col md={6}>
            <div class="from-group">
              <label for="password" class="form-label input-label-fonts" >
                Enter Price Level 1
              </label>
              <input type="text" class="form-control input-field" id="name" placeholder="Enter Price 1" />
            </div>
          </Col>
        </Row>
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
export default CreateItem;
