/* Podemos imagenes en nuestro componente así y luego mostrarlas en el JSX como si fuese una variable más*/
import logo from "./logo.svg";
/* Podemos importar CSS en nuestro componente así*/
import "./App.css";
import OtroComponente from "./OtroComponente";
import UserList from "./UserList";

/*
  Un componente de función es básicamente una función que devuelve JSX
  Si el JSX no va a estar en la misma línea que el return, tenemos que envolverlo en paréntesis
  El JSX que devolvamos debe tener un único nodo raiz, sea una etiqueta normal o un fragment
  Para usar una variable o una función en el médio del JSX tenemos que envolver la expresión entre llaves {}
  Para montar un componente en otro, lo usaremos en el JSX como si fuese una etiqueta HTML  
*/
function App() {
  return (
    <div className="App">
      <UserList />
      {/*En JSX el atributo class es className */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <OtroComponente />
    </div>
  );
}

export default App;
