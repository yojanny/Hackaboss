import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  //useParams es un hook que me devuelve un objeto que contiene todos los params de esta ruta
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  console.log(location);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
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

