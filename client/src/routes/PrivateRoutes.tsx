import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { authState } = useAuth();


  if (!authState.isLogged) {
    return <Navigate to="/" />;
  }


  return children;
};
