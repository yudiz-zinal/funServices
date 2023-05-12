import { Col, Row, Button, Table } from "react-bootstrap";

import BreadcrumbNav from "src/components/BreadcrumbNav";

const ViewReports = () => {
  return (
    <>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">View Reorder Request</h1>
          <div className="d-flex align-items-center">
            <Button disabled className="theme-btn small-btn">Printed</Button>
            <Button className="theme-btn small-btn">Print</Button>
          </div>
        </div>
        <Row>
          <Col md={6}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">Reorder From</p>
              <h4>St. Xavier's School</h4>
            </div>
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
          <h2>Details</h2>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Name
              </p>
              <h4>Stefan Salvatore</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Tel #
              </p>
              <h4>(012) 345-6789</h4>
            </div>
          </Col>
          <Col md={4}>
            <div class="field">
              <p className="muted-text small-text mb-1 mb-md-2">
                Note
              </p>
              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            </div>
          </Col>
        </Row>
        <Col xs={12}>
          <hr />
        </Col>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Table responsive className="text-center">
              <thead>
                <tr>
                  <th>Item Number</th>
                  <th>Item Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  [1, 2, 3, 4, 5].map((item) => {
                    return (
                      <tr key={item}>
                        <td>568410</td>
                        <td>Don Quixote</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default ViewReports;