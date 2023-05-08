import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "preact/hooks";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import artwork from "../../assets/images/auth-artwork.png"
import { Container } from "react-bootstrap";
import "./style.scss"

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
      <header class="auth-header position-absolute">
        <div class="container">
          <div class="header-section">Fun Services</div>
        </div>
      </header>
      <section class="auth-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img className="artwork" src={artwork} alt="" />
            </div>
            <div class="col-md-6 auth-content">
              <div class="content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="page">
        <Outlet />
      </div> */}
    </div>
  );
}

export default AuthLayout;
