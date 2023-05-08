import { Container } from "react-bootstrap";
import BreadcrumbNav from "src/components/BreadcrumbNav";

import "./style.scss"
import { NavLink } from "react-router-dom";

function UserDetails() {
  return (
    <Container>
      <BreadcrumbNav />
      <section className="profile-section">
        <div className="title d-flex justify-content-between align-items-center pb-3">
          <h1 class="mb-0">My Profile</h1>
          <NavLink className="theme-btn small-btn">Edit</NavLink>
        </div>
      </section>
    </Container>
  );
}
export default UserDetails;
