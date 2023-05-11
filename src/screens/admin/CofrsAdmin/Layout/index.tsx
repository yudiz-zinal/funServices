import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "src/services/AuthService";
import { Container, Dropdown } from "react-bootstrap";

import logo from "../../../../assets/images/logo.png";
import userPic from "../../../../assets/images/dummy/user-img.jpg";

const CofrsAdminLayout = () => {
  const navigate = useNavigate();
  const logoutUser = async () => {
    await logout();
    navigate("/login");
  };
  return (
    // <div class="main">
    //   Cofrs Layout
    //   <Button
    //     title="Logout"
    //     onClick={async () => logoutUser()}
    //     testId="logout-btn"
    //   />
    //   <div class="page">
    //     <Outlet />
    //   </div>
    // </div>
    <>
      <header className="user-header">
        <Container className="d-flex align-items-center justify-content-between">
          <img className="logo" src={logo} />
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="userDropdown"
              className="d-inline-flex align-items-center"
            >
              <span className="username text-start">Damon</span>
              <img className="userpic" src={userPic} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
              <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
export default CofrsAdminLayout;
