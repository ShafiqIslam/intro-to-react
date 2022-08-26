import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function RequireAuth({children}) {
  const { currentUser } = useAuth();
  let location = useLocation();

  return currentUser ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export function RequireGuest({children}) {
  const { currentUser } = useAuth();
  let location = useLocation();

  return !currentUser ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}