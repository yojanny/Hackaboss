import logo from "./logo.svg";
import "./App.css";
import EffectsBasic from "./components/EffectsBasic";
import { useState } from "react";
import PersistData from "./components/PersistData";

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    console.log(e);
    setShowComponent(e.target.checked);
  };

  return (
    <div className="App">
      {showComponent && <EffectsBasic counter={counter} />}
      <form>
        <label htmlFor="toggle"> Activar</label>
        <input
          onChange={(e) => {
            setCounter(e.target.value);
          }}
          type="number"
        />
        Counter : {counter}
        <input
          id="toggle"
          value={showComponent}
          onChange={handleChange}
          type="checkbox"
        />
      </form>
      <PersistData />
    </div>
  );
}

export default App;
