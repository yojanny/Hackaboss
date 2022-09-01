import logo from './logo.svg';
import './App.css';
import ControlledForm from "./components/ControlledForm";
import Basic from "./components/Basic";
import Login from "./components/Login";
import Uncontrolled from "./components/Uncontrolled";


function App() {
  return (
    <div className="App">
    <Basic />
    <ControlledForm />
    <Login />
    <Uncontrolled /> 
  </div>

  );
}

export default App;
