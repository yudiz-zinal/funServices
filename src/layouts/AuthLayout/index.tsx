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
      <div class="container-fluid d-flex flex-column min-vh-100 background-container ">
        <div class="px-5 pt-4">
          <div class="row  border-bottom border-dark pb-4">
            <div class="col fs-2 header-section ">Fun Services</div>
          </div>
          <div>
            <div class="col ">
              <img src="/images/Vector.png" class="content-image" />
              <img src="/images/PolesCombined.png" class="content-image " />
            </div>
          </div>
        </div>
        <div class="flex-grow-1 row">
          <div class="col"></div>

          <Outlet />
        </div>
      </div>
      {/* <div class="page">
        <Outlet />
      </div> */}
    </div>
  );
}

export default AuthLayout;
