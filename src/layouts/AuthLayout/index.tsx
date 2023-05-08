import { Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./style.scss"
import artwork from "../../assets/images/auth-artwork.png"
import logo from "../../assets/images/logo.png"

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
        <Container>
          <div class="header-section">
            <img class="header-logo" src={logo} />
          </div>
        </Container>
      </header>
      <section class="auth-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 auth-content auth-artwork d-flex align-items-center justify-content-center justify-content-md-start">
              <img className="artwork" src={artwork} alt="" />
            </div>
            <div class="col-md-6 auth-content d-flex align-items-center">
              <div class="content w-100 ps-md-3 ps-xl-5">
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
