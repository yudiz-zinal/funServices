import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import { logout } from "src/services/AuthService";

import logo from "../../../../assets/images/logo.png";
import userPic from "../../../../assets/images/dummy/user-img.jpg";

const OwnerAdminLayout = () => {
  const navigate = useNavigate();
  const logoutUser = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="d-flex">
      <aside className="sidebar">
        <NavLink href="/" className="owner-logo d-flex justify-content-center">
          <img src={logo} />
        </NavLink>
        <nav className="menu">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/school-management/">Manage Schools</NavLink>
          <NavLink to="/items-management">Manage Items</NavLink>
          <NavLink to="/reorder-requests">Reorders</NavLink>
          <NavLink to="/reports">Reports</NavLink>
        </nav>
      </aside>
      <div className="content-owner">
        <header className="owner-header d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="userDropdown"
              className="d-inline-flex align-items-center"
            >
              <span className="username text-start">Stefan</span>
              <img className="userpic" src={userPic} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
              <Dropdown.Item onClick={async () => logoutUser()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </header>
        <main class="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default OwnerAdminLayout;
