import { Outlet, useNavigate } from "react-router-dom";
import Button from "src/components/Button";
import { logout } from "src/services/AuthService";
const OwnerAdminLayout = () => {
  const navigate = useNavigate();
  const logoutUser = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="d-flex">
      <aside className="sidebar">

      </aside>
      <div className="content-block">
        <header>
          <Button
            title="Logout"
            onClick={async () => logoutUser()}
            testId="logout-btn"
            className="theme-btn"
          />
        </header>
        <main class="page">
          Owner Layout
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default OwnerAdminLayout;
