import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "preact/hooks";
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
import { useRecoilState } from "recoil";
import { accountAtom } from "src/recoilState/account";
import {
  logout,
  // resendVerificationMail as resendVerificationMailAPI,
} from "src/services/AuthService";

// import "./user-layout.scss";
import { VNode } from "preact";
import { Container, Dropdown } from "react-bootstrap";

import "./style.scss";
import logo from "../../assets/images/logo.png";
import userPic from "../../assets/images/dummy/user-img.jpg";
const USER_RELOAD_TIME = 20000;

function UserLayout(): VNode<any> {
  let authState: any;
  let authInterval: any;
  const auth = getAuth();
  let navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState<boolean | undefined>(
    undefined
  );
  const [account, setAccount] = useRecoilState<AccountModel | undefined>(
    accountAtom
  );
  // const initializeAccount = async (account: AccountModel) => {
  //   setAccount(account);
  // };
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setAccount({
        id: user?.uid || "",
        email: user?.email || "",
        isAdmin: true,
      });
      return user;
    });
  }, []);
  const logoutUser = async () => {
    await logout();
    navigate("/login");
  };

  // const renderOutlet = () => {
  //   if (emailVerified === undefined) return "";

  //   return emailVerified ? (
  //     <Outlet />
  //   ) : (
  //     <div>
  //       <span>Verify your email</span>{" "}
  //       {/* <Button
  //           title="Resend verification email"
  //           isLoading={isLoading}
  //           onClick={(event: MouseEvent) => resendVerificationMail(event)}
  //         /> */}
  //     </div>
  //   );
  // };
  //   console.log(account, "ooo");
  //   const renderUsersLink = () => {
  //     if (account && account.isAdmin) {
  //       return (
  //         <li>
  //           <NavLink data-testid="users-link" to={`/users`}>
  //             Users
  //           </NavLink>
  //         </li>
  //       );
  //     }

  //     return "";
  //   };

  //   const resendVerificationMail = async (event: MouseEvent) => {
  //     event.preventDefault();

  //     if (!window.confirm(`Are you sure, you want to resend verification email?`))
  //       return;

  //     setIsLoading(true);
  //     const resend: AsyncResposeType = await resendVerificationMailAPI();
  //     setIsLoading(false);

  //     if (!resend.success) {
  //       return alert(resend.message);
  //     }
  //   };

  return (
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
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default UserLayout;
