import { Table, Button } from "react-bootstrap";

import viewIcon from "../..../../../../../assets/images/icon/view-icon.svg"
import sortIcon from "../..../../../../../assets/images/icon/sort-icon.svg"
import prevArrow from "../..../../../../../assets/images/icon/left-arrow.svg"
import nextArrow from "../..../../../../../assets/images/icon/right-arrow.svg"

function ReportsManagement() {
  return (
    <section className="management-section mb-3 mb-md-4 pb-1">
      <div className="title d-flex flex-column flex-lg-row justify-content-between align-items-lg-center pb-3">
        <h1 class="mb-2 mb-lg-0">Manage Reports</h1>
        <div className="d-flex flex-wrap flex-md-nowrap align-items-center">
          <div class="from-group search-group mb-0">
            <input type="text" class="form-control search-control input-field" id="name" placeholder="Search" />
          </div>
        </div>
      </div>
      <Table responsive className="text-center">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>
              <div class="d-flex align-items-center justify-content-center">
                School <Button className="data-sort flex-shrink-0" variant="link"><img src={sortIcon} alt="sort" /></Button>
              </div>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            [1, 2, 3, 4, 5].map((item) => {
              return (
                <tr key={item}>
                  <td>{item}</td>
                  <td>St. Xavier's School</td>
                  <td>
                    <div className="action-btns d-flex align-items-center justify-content-center">
                      <Button variant="link">
                        <img src={viewIcon} alt="view" />
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <div className="pagination d-flex align-items-center justify-content-center">
        <Button variant="link">
          <img src={prevArrow} alt="prev" />
        </Button>
        <Button variant="link" className="pages">1</Button>
        <Button variant="link" className="pages">2</Button>
        <Button variant="link" className="pages">3</Button>
        <Button variant="link">
          <img src={nextArrow} alt="next" />
        </Button>
      </div>
    </section>
  );
}

export default ReportsManagement;
