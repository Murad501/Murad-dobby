import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { loadingProvider } from "../Context/LoadingContext";
import { userProvider } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userProvider);
  const { setIsLoading } = useContext(loadingProvider);
  const location = useLocation();

  if (loading) {
    return setIsLoading(true);
  }

  if (user) {
    setIsLoading(false)
    return children;
  }
  setIsLoading(false)

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
