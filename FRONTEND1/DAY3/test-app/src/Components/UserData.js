import Avatar from "./Avatar";

function UserData(props) {
  /* el bloque de renderizado condicional usa el operador && para mostrar o no un bloque de codigo/componente: condicion && <Componente1/>
     si queremos tener algo equivalente a un if-else podemos usar el operador ternario: condicion ? <Componente1/> : <Componente2/>
   */

  return (
    <li className="User">
      Si quiero mostrar o no mostrar algo uso &&
      {/* El && es como un if SIN else
          Cuando queramos hacer renderizado condicional tiene que estar entre llaves, 
          porque queremos que se interprete como JS
       */}
      {props.userInfo.avatar && (
        <Avatar
          image={props.userInfo.avatar}
          firstName={props.userInfo.first_name}
        />
      )}
      si quiero mostrar una cosa o su alternativa uso operador ternario a ? b :
      c{/* El ternario es como un if CON else */}
      {props.userInfo.avatar ? (
        <Avatar
          image={props.userInfo.avatar}
          firstName={props.userInfo.first_name}
        ></Avatar>
      ) : (
        "No hay avatar"
      )}
      <h2>
        Nombre: {props.userInfo.first_name} {props.userInfo.last_name}
      </h2>
      <h3>E-mail: {props.userInfo.email}</h3>
    </li>
  );
}

export default UserData;
