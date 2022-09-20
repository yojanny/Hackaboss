import logo from "./logo.svg";
import "./App.css";
import ControlledForm from "./components/ControlledForm";
import Basic from "./components/Basic";
import Login from "./components/Login";
import Uncontrolled from "./components/Uncontrolled";
import RefsExample from "./components/RefsExample";

function App() {
  return (
    <div className="App">
      <Basic />
      <ControlledForm />
      <Login />
      <Uncontrolled />
      <RefsExample />
    </div>
  );
}

export default App;
