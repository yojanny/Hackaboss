import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import UserSelector from "./Components/UserSelector";

function App() {
  /*
    dispararLasers se ejecutará cuando el evento de click se dispare,
    para eso la ponemos en el atributo onClick en el JSX de abajo
    El parámetro que recibe cuando la invoca el click es la información sobre el evento
  */
  const dispararLasers = (e) => {
    console.log("PIU PIU", e);
  };

  return (
    <>
      <UserSelector></UserSelector>
      {/*
        Hay muchos eventos que podemos "escuchar", en este caso es el click
        La función que se ejecuta irá entre llaves
        En el callback NO usaremos los paréntesis para invocar la función, 
        lo que queremos es pasar un callback, no ejecutarlo
      */}
      <button onClick={dispararLasers}>Disparar</button>
      <Counter />
    </>
  );
}

export default App;
