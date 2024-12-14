import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ProtectedRoute = ({ children, fallback }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    toast.error("Please login as admin to perform this action");
    if (fallback) {
      return <>{fallback}</>;
    }
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;