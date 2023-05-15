import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../../auth/auth";

const useAuth = () => {
  // const user = useUser({});
  // const navigate = useNavigate();
  // console.log(user.data);
  // if (user.data?.email) {
  //   navigate("/dashboard");
  //   return true;
  // } else {
  //   return false;
  // }
  // navigate("/dashboard");
  return true;
};
const ProtectedRoutes = ({ user }: any) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
