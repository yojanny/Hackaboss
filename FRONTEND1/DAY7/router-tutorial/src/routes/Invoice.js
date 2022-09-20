import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  //useParams es un hook que me devuelve un objeto que contiene todos los params de esta ruta
  const params = useParams();
  /* useLocation nos devuelve información de location como "window.location" */
  const location = useLocation();
  /* useNavigate nos devuelve una función que nos permite navegar a otra ruta del router */
  const navigate = useNavigate();
  /* 
  Recuperamos los datos de una factura, el id lo recuperamos de los params
  Como los params son strings tenemos que pasarlo a Number
  */
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  console.log(location);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      {/* 
      Navigate nos permite cambiar de ruta
      Si le pasamos un numero positivo es equivalente a pulsar la flecha de siguiente en la historia del navegador
      Un numero negativo navega hacia atrás
      Un string indica la ruta concreta a la que queremos ir
      */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        A expenses
      </button>
    </main>
  );
}
