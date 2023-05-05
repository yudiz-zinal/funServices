import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "preact/hooks";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AuthLayout() {
  let authState: any;
  let navigate = useNavigate();

  //   useEffect(() => {
  //     checkUserLogin();
  //     return () => {
  //       cleanup();
  //     };
  //   }, []);

  const checkUserLogin = () => {
    const auth = getAuth();
    authState = onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      }
    });
  };

  const cleanup = () => {
    authState && authState();
  };

  return (
    <div class="main">
      {/* <div class="sidebar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to={`/login`}>Login</NavLink>
            </li>
            <li>
              <NavLink to={`/phone-login`}>Phone Login</NavLink>
            </li>
            <li>
              <NavLink to={`/signup`}>Signup</NavLink>
            </li>
            <li>
              <NavLink to={`/send-reset-password-email`}>
                Send Reset password email
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>Auth layout</div>
      </div> */}
      <div class="page">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
