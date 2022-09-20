# REACT ROUTER

Nos permite crear SPAs (Single Page Application), de manera que al cambiar de página lo único que hacemos es cambiar los componentes que se muestran, pero nunca recargamos. Nos mantenemos siempre en la misma página.

Ejemplo:

```js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```
[BrowserRouter](https://reactrouter.com/en/main/routers/browser-router) es un Router que permite tener la interfaz sincronizada con la URL.

[Link](https://reactrouter.com/en/main/components/link) genera un enlace para poder navegar a otra ruta. Util para las barras de navegación. Podemos usar [NavLink](https://reactrouter.com/web/api/NavLink) si queremos aplicarle una clase al enlace cuando es el enlace seleccionado
[Routes](https://reactrouter.com/en/main/components/routes)Renderiza una unica ruta o redirect que sea match.
[Route](https://reactrouter.com/en/main/components/route) crea una nueva ruta en nuestra aplicación donde mostraremos componentes. Con el atributo `path` declaramos la url en la que se mostrará

## Ejemplo con enrutado anidado

```js
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
```

[useMatch](https://reactrouter.com/en/main/hooks/use-match) Es un hook con el 

[matchPath](https://reactrouter.com/en/main/utils/match-path) Es un objeto que contiene información sobre como un `<Route path>` coincide con una URL.

[useParams](https://reactrouter.com/en/main/hooks/use-params) Devuelve un objeco con pares de clave/valor de parametros de la url de la `<Route>` actual.

## ¿Cómo navego a otra ruta?

A mayores de usar link si quisiesemos navegar de forma programática a otra ruta podríamos hacer lo siguiente.

Al renderizar un  `<Navigate>` en nuestro componente navegaremos a la ruta enlazada en su atributo `to`. Documentación de [Navigate](https://reactrouter.com/en/main/components/navigate)

Si lo queremos hacer de forma condicional, podemos hacer algo como lo siguiente.

```js
<Route exact path="/">
  {loggedIn ? <Navigate to="/dashboard" /> : <PublicHomePage />}
</Route>
```

Si lo que queremos es iniciar una navegación desde nuestro código JS usaremos [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate) como en el siguiente ejemplo.

```js
import { useNavigate } from "react-router-dom";

function SignupForm() {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await submitForm(event.target);
    navigate("../success", { replace: true });
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```