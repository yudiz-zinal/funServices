import { NavLink, Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import artwork from "../../assets/images/auth-artwork.png";
import arrow from "../../assets/images/icon/left-arrow.svg";
import logo from "../../assets/images/logo.png";

function AuthLayout() {
  return (
    <div class="main">
      <header class="auth-header position-absolute">
        <Container>
          <div class="header-section">
            <img class="header-logo" src={logo} />
          </div>
        </Container>
      </header>
      <section class="auth-section">
        <Container>
          <Row className="align-items-center">
            <Col
              md={6}
              className="auth-content auth-artwork d-flex align-items-center justify-content-center justify-content-md-start position-relative"
            >
              <NavLink to={`/`} className={"back-arrow position-absolute"}>
                <img src={arrow} alt="arrow" />
              </NavLink>
              <img className="artwork" src={artwork} alt="artwork" />
            </Col>
            <Col md={6} className="auth-content d-flex align-items-center">
              <div class="content w-100 ps-md-3 ps-xl-5">
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AuthLayout;
