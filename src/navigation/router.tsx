// @ts-nocheck
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "preact/hooks";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import AuthLayout from "src/layouts/AuthLayout";
import UserLayout from "src/layouts/UserLayout";
import { accountAtom } from "src/recoilState/account";
import AdminProfile from "src/screens/admin/AdminProfile";
import EditAdminProfile from "src/screens/admin/AdminProfile/EditProfile";
import CofrsDashboard from "src/screens/admin/CofrsAdmin/Dashboard";
import CofrsAdminLayout from "src/screens/admin/CofrsAdmin/Layout";
import CreateOwner from "src/screens/admin/CofrsAdmin/OwnerManagement/CreateOwner";
import OwnerDetails from "src/screens/admin/CofrsAdmin/OwnerManagement/OwnerDetails";
import OwnerDashboard from "src/screens/admin/OwnersAdmin/Dashboard";
import ItemManagement from "src/screens/admin/OwnersAdmin/ItemsManagement";
import CreateItem from "src/screens/admin/OwnersAdmin/ItemsManagement/CreateItem";
import ReorderManagement from "src/screens/admin/OwnersAdmin/Reorders";
import OwnerAdminLayout from "src/screens/admin/OwnersAdmin/Layout";
import SchoolManagement from "src/screens/admin/OwnersAdmin/SchoolManagement";
import CreateSchoolProfile from "src/screens/admin/OwnersAdmin/SchoolManagement/CreateSchoolProfile";
import SchoolDetails from "src/screens/admin/OwnersAdmin/SchoolManagement/SchoolDetails";
import UpdateAdminpassword from "src/screens/admin/UpdatePassword";

import ForgotPassword from "src/screens/Auth/ForgotPassword";
import Login from "src/screens/Auth/Login";
import ResetPassword from "src/screens/Auth/ResetPassword";
import CofrsRoutes from "./CofrsRoutes";
import OwnerRoutes from "./OwnerRoutes";
import PrivateAuthRoute from "./PrivateAuthRoute";
import PrivateRoute from "./PrivateRoute";
import ViewReorders from "src/screens/admin/OwnersAdmin/Reorders/ViewReorders";
import ViewReports from "src/screens/admin/OwnersAdmin/Reports";
import ItemDetails from "src/screens/admin/OwnersAdmin/ItemsManagement/ItemDetails";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserLayout />,
//   },
//   {
//     path: "",
//     element: <AuthLayout />,
//     children: [
//       {
//         path: "/login",
//         element: <Login />,
//       },

//       {
//         path: "/forgot-password",
//         element: <ForgotPassword />,
//       },
//       {
//         path: "/reset-password",
//         element: <ResetPassword />,
//       },
//     ],
//   },
// ]);

export const Router = () => {
  const [account, setAccount] = useRecoilState<AccountModel | undefined>(
    accountAtom
  );
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setAccount({
        id: user?.uid || "",
        email: user?.email || "",
        isAdmin: false,
      });
      return user;
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateAuthRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" exact element={<ForgotPassword />} />
            <Route path="/reset-password" exact element={<ResetPassword />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute />}>
          {/* Cofrs Routes */}
          {account?.isAdmin === true ? (
            <Route element={<CofrsAdminLayout />}>
              <Route path="/" element={<CofrsDashboard />} />
              {/* Owner Routes */}
              <Route path="/create-owner" element={<CreateOwner />} />
              <Route path="/owner-details" element={<OwnerDetails />} />
              <Route path="/my-account" element={<AdminProfile />} />
              <Route path="/edit-account" element={<EditAdminProfile />} />
              <Route
                path="/change-password"
                element={<UpdateAdminpassword />}
              />
            </Route>
          ) : (
            // Owner Routes
            <Route element={<OwnerAdminLayout />}>
              <Route path="/" element={<OwnerDashboard />} />
              {/* School Management Routes */}
              <Route
                path="/school-management/"
                element={<SchoolManagement />}
              />
              <Route
                path="/school-management/create"
                element={<CreateSchoolProfile />}
              />
              <Route
                path="/school-management/details"
                element={<SchoolDetails />}
              />

              {/* Items Management Routes */}

              <Route path="/items-management" element={<ItemManagement />} />
              <Route path="/items-management/create" element={<CreateItem />} />
              <Route path="/items-management/details" element={<ItemDetails />} />

              {/* Manage Reorder Requests */}

              <Route path="/reorder-requests" element={<ReorderManagement />} />
              <Route path="/view-requests" element={<ViewReorders />} />

              {/* Reports */}
              <Route path="/reports" element={<ViewReports />} />

              <Route path="/my-account" element={<AdminProfile />} />
              <Route
                path="/change-password"
                element={<UpdateAdminpassword />}
              />
            </Route>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
