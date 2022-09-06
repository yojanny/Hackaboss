import { Navigate } from "react-router-dom";

function AutoRedirect() {
  return <Navigate to="/invoices" replace={true} />;
}

export default AutoRedirect;

