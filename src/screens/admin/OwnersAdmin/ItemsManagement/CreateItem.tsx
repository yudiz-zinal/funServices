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
          <Col md={4}>
            <div class="from-group">
              <label for="price1" class="form-label input-label-fonts" >
                Enter Price Level 1
              </label>
              <input type="text" class="form-control input-field" id="price1" placeholder="Enter Price 1" />
            </div>
          </Col>
          <Col md={4}>
            <div class="from-group">
              <label for="price2" class="form-label input-label-fonts" >
                Enter Price Level 2
              </label>
              <input type="text" class="form-control input-field" id="price2" placeholder="Enter Price 2" />
            </div>
          </Col>
          <Col md={4}>
            <div class="from-group">
              <label for="price3" class="form-label input-label-fonts" >
                Enter Price Level 3
              </label>
              <input type="text" class="form-control input-field" id="price3" placeholder="Enter Price 3" />
            </div>
          </Col>
          <Col md={4}>
            <div class="from-group">
              <label for="price4" class="form-label input-label-fonts" >
                Enter Price Level 4
              </label>
              <input type="text" class="form-control input-field" id="price4" placeholder="Enter Price 4" />
            </div>
          </Col>
          <Col md={4}>
            <div class="from-group">
              <label for="price5" class="form-label input-label-fonts" >
                Enter Price Level 5
              </label>
              <input type="text" class="form-control input-field" id="price5" placeholder="Enter Price 5" />
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
export default CreateItem;
