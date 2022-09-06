import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

function Routing() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/profile" exact element={<Profile></Profile>}>
          <Route path="detail" element={<Detail></Detail>}></Route>
        </Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

