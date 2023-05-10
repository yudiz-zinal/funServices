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
    <div class="main">
      Owner Layout
      <Button
        title="Logout"
        onClick={async () => logoutUser()}
        testId="logout-btn"
      />
      <div class="page">
        <Outlet />
      </div>
    </div>
  );
};
export default OwnerAdminLayout;
