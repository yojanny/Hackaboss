import { User } from "./User";

export function UserList({users}){

  return (
    <ul>
     {/*  <User userInfo={users[0]}></User> */}

     {
      //Si no tienen indentificador, podemos usar el index para la key
      //users.map((user, index) => <li key={index}><User userInfo={user}></User></li>)


      //Si los elementos tienen un identificador unico, podemos usarlo
      users.map(user => <li key={user.login.uuid}><User userInfo={user}></User></li>)
     }
    </ul>
  )
}