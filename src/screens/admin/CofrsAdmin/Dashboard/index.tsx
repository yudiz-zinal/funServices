import { Container, Table, Button, Dropdown } from "react-bootstrap";
import "./style.scss";

import editIcon from "../../../../assets/images/icon/edit-pen-icon.svg";
import archiveIcon from "../../../../assets/images/icon/archive-icon.svg";
import viewIcon from "../../../../assets/images/icon/view-icon.svg";
import prevArrow from "../../../../assets/images/icon/left-arrow.svg";
import nextArrow from "../../../../assets/images/icon/right-arrow.svg";

function CofrsDashboard() {
  return (
    <>
      <Container>
        <section className="management-section mb-3 mb-md-5">
          <div className="title d-flex flex-column flex-md-row justify-content-between align-items-center pb-3">
            <h1 class="mb-0">Owners Management</h1>
            <div className="d-flex justify-content-between align-items-center">
              <div class="from-group search-group mb-0">
                <input
                  type="text"
                  class="form-control search-control input-field"
                  id="name"
                  placeholder="Search"
                />
              </div>
              <Dropdown className="ms-2">
                <Dropdown.Toggle
                  variant="link"
                  id="status"
                  className="d-inline-flex align-items-center"
                >
                  Active
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Archive</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button className="theme-btn small-btn ms-2">Create Owner</Button>
            </div>
          </div>
          <Table responsive className="text-center">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Owners Name</th>
                <th>Email ID</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>Stefan Gilbert</td>
                    <td>stefan.l@xyz.com</td>
                    <td>(012) 345-6789</td>
                    <td>
                      <div className="action-btns d-flex align-items-center justify-content-center">
                        <Button variant="link">
                          <img src={viewIcon} alt="view" />
                        </Button>
                        <Button variant="link">
                          <img src={editIcon} alt="edit" />
                        </Button>
                        <Button variant="link">
                          <img src={archiveIcon} alt="archive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="pagination d-flex align-items-center justify-content-center">
            <Button variant="link">
              <img src={prevArrow} alt="prev" />
            </Button>
            <Button variant="link" className="pages">
              1
            </Button>
            <Button variant="link" className="pages">
              2
            </Button>
            <Button variant="link" className="pages">
              3
            </Button>
            <Button variant="link">
              <img src={nextArrow} alt="next" />
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
export default CofrsDashboard;
