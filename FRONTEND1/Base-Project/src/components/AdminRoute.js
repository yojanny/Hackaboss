import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const isAdmin = false;
  console.log("Admin", isAdmin);
  return isAdmin ? children : <Navigate to="/" />;
}

export default AdminRoute;
