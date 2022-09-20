import { useState } from "react";

const dataFromBackend = [
  {
    id: 1,
    first_name: "Pauly",
    last_name: "Yardley",
    email: "pyardley0@patch.com",
    gender: "Male",
    avatar: "https://robohash.org/etestofficia.png?size=50x50&set=set1",
  },
  {
    id: 2,
    first_name: "Thorny",
    last_name: "Hurtado",
    email: "thurtado1@naver.com",
    gender: "Male",
    avatar: "https://robohash.org/quoditaqueveritatis.png?size=50x50&set=set1",
  },
  {
    id: 3,
    first_name: "Art",
    last_name: "Beddin",
    email: "abeddin2@census.gov",
    gender: "Male",
    avatar: "https://robohash.org/magnirerumoccaecati.png?size=50x50&set=set1",
  },
  {
    id: 4,
    first_name: "Marchall",
    last_name: "Braunroth",
    email: "mbraunroth3@cmu.edu",
    gender: "Male",
    avatar:
      "https://robohash.org/voluptasrecusandaeeum.png?size=50x50&set=set1",
  },
  {
    id: 5,
    first_name: "Saleem",
    last_name: "Aronstam",
    email: "saronstam4@4shared.com",
    gender: "Male",
    avatar:
      "https://robohash.org/consequunturimpeditqui.png?size=50x50&set=set1",
  },
  {
    id: 6,
    first_name: "Kaiser",
    last_name: "Oxenham",
    email: "koxenham5@forbes.com",
    gender: "Male",
    avatar: "https://robohash.org/autetvel.png?size=50x50&set=set1",
  },
  {
    id: 7,
    first_name: "Magdaia",
    last_name: "Bettesworth",
    email: "mbettesworth6@nyu.edu",
    gender: "Female",
    avatar: "https://robohash.org/temporaautemneque.png?size=50x50&set=set1",
  },
  {
    id: 8,
    first_name: "Brian",
    last_name: "Langford",
    email: "blangford7@redcross.org",
    gender: "Male",
    avatar: "https://robohash.org/rerumblanditiisnobis.png?size=50x50&set=set1",
  },
  {
    id: 9,
    first_name: "Suzy",
    last_name: "Grovier",
    email: "sgrovier8@comcast.net",
    gender: "Female",
    avatar:
      "https://robohash.org/veniamvoluptatemveritatis.png?size=50x50&set=set1",
  },
  {
    id: 10,
    first_name: "Bunni",
    last_name: "Simao",
    email: "bsimao9@cloudflare.com",
    gender: "Female",
    avatar: "https://robohash.org/molestiaeautadipisci.png?size=50x50&set=set1",
  },
];

function UserSelector() {
  /*
    Para el selector de usuarios, guardaremo en el estado 
    - la lista de usuarios como array
    - la posición en la que se encuentra el selector 
  */
  const [userList, setUserList] = useState(dataFromBackend);
  const [selectedUser, setSelectedUser] = useState(0);

  /*
    Función para cambiar de usuario a mostrar
    el if impide que nos salgamos de los limites del array
  */
  const changePage = (pageTo) => {
    if (pageTo < 0 || pageTo > userList.length) {
      return;
    }
    setSelectedUser(pageTo);
  };

  return (
    <section>
      {/* 
      Mostramos el dato de un usuario concreto accediendo en el array a su indice
      por eso guardamos como estado selectedUser
      */}
      <img src={userList[selectedUser].avatar} />
      <h1>
        {userList[selectedUser].first_name} {userList[selectedUser].last_name}
      </h1>
      {/* 
        Podemos deshabilitar el boton condicionalmente
        Si lo que está entre llaves evalua a true estara deshabilitado
        Si lo que está entre llaves evalua a false estara habilitado
      */}
      <button
        onClick={() => {
          changePage(selectedUser - 1);
        }}
        disabled={selectedUser === 0}
      >
        Anterior
      </button>
      <button
        onClick={() => {
          changePage(selectedUser + 1);
        }}
        disabled={selectedUser >= userList.length - 1}
      >
        Siguiente
      </button>
    </section>
  );
}

export default UserSelector;
