import UserData from "./UserData";

/*
  Para mostrar listas que almacenamos en arrays usaremos el método map de los arrays
  En el map devolveremos el JSX que queremos listar
  La etiqueta padre de lo que devolvemos en map deberá tener un atributo key
  la key debe ser única y no deberíamos usar el index que nos da map
*/
function UserList(props) {
  return (
    <ul>
      {props.userData.map((user) => {
        return <UserData userInfo={user} key={user.id}></UserData>;
      })}
    </ul>
  );
}

export default UserList;
