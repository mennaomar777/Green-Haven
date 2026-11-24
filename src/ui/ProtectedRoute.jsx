import React, { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return <Loading fullPage label="Preparing your workspace…" />;

  if (isAuthenticated) return children;
}
