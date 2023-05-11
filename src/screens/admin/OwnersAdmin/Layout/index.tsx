import { useState } from "preact/hooks";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";

import { logout } from "src/services/AuthService";

import logo from "../../../../assets/images/logo.png";
import menuIcon from "../../../../assets/images/icon/menu-icon.svg";
import userPic from "../../../../assets/images/dummy/user-img.jpg";

const OwnerAdminLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const logoutUser = async () => {
    await logout();
    navigate("/login");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="d-flex">
      <aside className={`sidebar ${isMenuOpen && 'active'}`}>
        <NavLink href="/" className="owner-logo d-flex justify-content-center">
          <img src={logo} alt="logo" />
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
        <header className="owner-header d-flex justify-content-between align-items-center">
          <NavLink href="/" className="owner-logo d-block d-xl-none">
            <img src={logo} alt="logo" />
          </NavLink>
          <Dropdown className="ms-auto">
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
          <Button variant="link" className="menu-icon ms-1 ms-sm-2 d-block d-xl-none" onClick={() => toggleMenu()}>
            <img src={menuIcon} alt="menu" className="w-100" />
          </Button>
        </header>
        <main class="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default OwnerAdminLayout;
