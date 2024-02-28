import { useSelector } from "react-redux";
import { SelectUser } from "./authSlice";
import { Navigate } from "react-router-dom";
import React from "react";

type ProtectedRouteProps = {
  element: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  // const user = useSelector(SelectUser);

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return <Navigate to="/login" />;
  // return element;
};

export default ProtectedRoute;
