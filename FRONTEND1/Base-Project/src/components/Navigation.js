import { Link } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

function Navigation() {
  const isAdmin = useAdmin();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/size">Size</Link>
      <Link to="/tweet">Tweet</Link>
      {isAdmin && <Link to="/admin">Admin</Link>}
    </nav>
  );
}

export default Navigation;
