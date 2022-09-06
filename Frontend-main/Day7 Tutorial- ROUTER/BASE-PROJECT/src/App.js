import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  /*
    Los componentes Link funcionan como etiquetas <a> con un href
    La diferencia es que me mandan a una ruta sin recargar a traves del router
    en lugar de href usan el atributo "to"
  */
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>|{" "}
        <Link to="/navigate">Navigate con redireccion</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;


