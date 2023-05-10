import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const [isUser, setIsUser] = useState<any>(undefined);
  let navigate = useNavigate();
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    setIsUser(user);
    return user;
  });
  return isUser?.uid ? <Outlet /> : navigate("/login");
};
export default PrivateRoute;
