import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import BreadcrumbNav from "src/components/BreadcrumbNav";

const ItemDetails = () => {
  return (
    <>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">Item Details</h1>
          <div className="d-flex align-items-center">
            <NavLink to="/school-management/create" className="theme-btn dark-btn small-btn me-2">Edit</NavLink>
            <NavLink className="theme-btn small-btn">Delete</NavLink>
          </div>
        </div>
        <Row>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">Item Name</p>
              <h4>Don Quixote</h4>
            </div>
          </Col>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Item Code
              </p>
              <h4>546823</h4>
            </div>
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Barcode
              </p>
              <h4>654132</h4>
            </div>
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                School’s Cost
              </p>
              <h4>$ 5.40</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Price 1
              </p>
              <h4>$ 5.40</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Price 2
              </p>
              <h4>$ 5.40</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Price 3
              </p>
              <h4>$ 5.40</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Price 4
              </p>
              <h4>$ 5.40</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Price 5
              </p>
              <h4>$ 5.40</h4>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default ItemDetails;
