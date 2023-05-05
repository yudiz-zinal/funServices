import { Outlet, NavLink } from "react-router-dom";
// import { useEffect, useState } from "preact/hooks";
// import { getAuth, onIdTokenChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { accountAtom } from "recoilState/account";
// import {
//   logout,
//   resendVerificationMail as resendVerificationMailAPI,
// } from "services/AuthService";

// import "./user-layout.scss";
// import Button from "components/Button";
import { VNode } from "preact";
// const USER_RELOAD_TIME = 20000;

function UserLayout(): VNode<any> {
  //   let authState: any;
  //   let authInterval: any;
  //   let navigate = useNavigate();
  //   const [emailVerified, setEmailVerified] = useState<boolean | undefined>(
  //     undefined
  //   );
  //   const [account, setAccount] = useRecoilState<AccountModel | undefined>(
  //     accountAtom
  //   );
  //   const [isLoading, setIsLoading] = useState<boolean>(false);

  //   useEffect(() => {
  //     checkUserLogin();
  //     return () => {
  //       cleanup();
  //     };
  //   }, []);

  //   const checkUserLogin = () => {
  //     const auth = getAuth();

  //     try {
  //       authState = onIdTokenChanged(auth, async (user) => {
  //         if (user) {
  //           if (user.providerData[0].providerId === "password") {
  //             setEmailVerified(user.emailVerified);
  //             if (!user.emailVerified) {
  //               return;
  //             }
  //           } else {
  //             setEmailVerified(true);
  //           }

  //           const idTokenResult = await auth.currentUser?.getIdTokenResult();
  //           initializeAccount({
  //             id: user.uid,
  //             email: idTokenResult?.claims.email
  //               ? idTokenResult?.claims.email
  //               : "",
  //             isAdmin: idTokenResult?.claims.admin ? true : false,
  //           });
  //         } else {
  //           logoutUser();
  //         }
  //       });
  //     } catch (e) {
  //       logoutUser();
  //     }

  //     authInterval = setInterval(() => {
  //       auth.currentUser?.reload();
  //     }, USER_RELOAD_TIME);
  //   };

  //   const cleanup = () => {
  //     authState && authState();
  //     authInterval && clearInterval(authInterval);
  //   };

  //   const initializeAccount = async (account: AccountModel) => {
  //     setAccount(account);
  //   };
  //   const logoutUser = async () => {
  //     await logout();
  //     navigate("/login");
  //   };

  //   const renderOutlet = () => {
  //     if (emailVerified === undefined) return "";

  //     return emailVerified ? (
  //       <Outlet />
  //     ) : (
  //       <div>
  //         <span>Verify you email</span>{" "}
  //         <Button
  //           title="Resend verification email"
  //           isLoading={isLoading}
  //           onClick={(event: MouseEvent) => resendVerificationMail(event)}
  //         />
  //       </div>
  //     );
  //   };
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
    <div class="main">
      {/* <div class="sidebar">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        {renderUsersLink()}
                    </ul>
                    <Button
                        title="Logout"
                        onClick={async () => logoutUser()}
                        testId="logout-btn"
                    />
                </nav>
            </div> */}
      <div class="page">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
