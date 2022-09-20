import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function Root() {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  );
}
export default Root;
