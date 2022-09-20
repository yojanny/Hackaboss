import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/Invoice";
import AutoRedirect from "./routes/AutoRedirect";

/*
  El componente Routes declara un bloque de rutas
  El componente Route declara una sola ruta, en el atributo element podemos poner un componente que ya exista
  o jsx
  El asterisco nos sirve de comodin y va a matchear con las rutas que no tengan un match explicito
  Si una ruta va a tener un asterisco, este tiene que ir siempre al final
  Los dos puntos ":" declaran un parametro de la ruta 
  el atributo index funciona como el "index.html" de esa ruta y se carga por defecto si no hay match más especifico
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="navigate" element={<AutoRedirect />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
