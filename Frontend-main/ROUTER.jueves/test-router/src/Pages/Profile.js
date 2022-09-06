import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <Link to="/profile/detail">Detail</Link>
      <Outlet></Outlet>
    </>
  );
}

export default Profile;

