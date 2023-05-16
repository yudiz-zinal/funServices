import { Col, Row, Button, Table, Nav, Tab } from "react-bootstrap";

import BreadcrumbNav from "src/components/BreadcrumbNav";

const ViewReports = () => {
  return (
    <>
      <BreadcrumbNav />
      <section className="profile-section mb-3 mb-md-5">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">View Reorder Request</h1>
        </div>
        <Row className="justify-content-center">
          <Col xl={10} lg={10}>
            <Tab.Container defaultActiveKey="day">
              <Nav className="tab-nav justify-content-md-center mb-3 mb-md-4 pb-1 pd-md-0 text-center flex-nowrap text-nowrap overflow-auto">
                <Nav.Item>
                  <Nav.Link className="theme-btn dark-btn mx-1 mx-md-2" eventKey="day">Total Sales by Day</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="theme-btn dark-btn mx-1 mx-md-2" eventKey="item">Sales by Item</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="theme-btn dark-btn mx-1 mx-md-2" eventKey="drawer">Cash in Drawer</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="text-center">
                <Tab.Pane eventKey="day">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        [1, 2, 3, 4, 5].map((item) => {
                          return (
                            <tr key={item}>
                              <td>Day 1</td>
                              <td>$ 550.50</td>
                            </tr>
                          )
                        })
                      }
                      <tr>
                        <td className="font-bold theme-text">Total</td>
                        <td className="font-bold theme-text">$ 4456.00</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="item">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        [1, 2, 3, 4, 5].map((item) => {
                          return (
                            <tr key={item}>
                              <td>Item 1</td>
                              <td>652356</td>
                              <td>56</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="drawer">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Tender</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        [1, 2, 3, 4, 5].map((item) => {
                          return (
                            <tr key={item}>
                              <td>Cash</td>
                              <td>$ 8793.50</td>
                            </tr>
                          )
                        })
                      }
                      <tr>
                        <td className="font-bold theme-text">Total</td>
                        <td className="font-bold theme-text">$ 43967.50</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default ViewReports;