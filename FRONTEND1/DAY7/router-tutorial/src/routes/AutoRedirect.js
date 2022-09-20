import { Navigate } from "react-router-dom";

function AutoRedirect() {
  /*
    Navigate nos envía a la ruta especificaca en el atributo to en cuanto se monta
  */
  return <Navigate to="/invoices" replace={true} />;
}

export default AutoRedirect;

/*Esto sería un ejemplo de como podríamos implementar a mano el componente Navigate del router */

/* function Navigate({ to , replace}) {
  const navigate = useNavigate()
  navigate(to, {replace})
} */
