import { Col, Row } from "react-bootstrap";
import school from "../../../../assets/images/school.png";
import books from "../../../../assets/images/books.png";

function OwnerDashboard() {
  return (
    <>
      <section className="management-section mb-3 mb-md-5 pb-1">
        <div className="title d-flex flex-column flex-lg-row justify-content-between align-items-lg-center pb-3">
          <h1 class="mb-2 mb-lg-0">Dashboard</h1>
        </div>
        <Row className="dashboard">
          <Col xxl={3} lg={4} sm={6}>
            <div className="item text-center">
              <img className="mb-3 mb-md-4" src={school} alt="school" />
              <h2 className="mb-2">6</h2>
              <h3 className="mb-0">Number of Schools</h3>
            </div>
          </Col>
          <Col xxl={3} lg={4} sm={6}>
            <div className="item text-center">
              <img className="mb-3 mb-md-4" src={books} alt="books" />
              <h2 className="mb-2">512</h2>
              <h3 className="mb-0">Total Items</h3>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
export default OwnerDashboard;
