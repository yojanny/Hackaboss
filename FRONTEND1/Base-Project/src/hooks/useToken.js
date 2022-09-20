import { useEffect, useState } from "react";

/*
  Creamos un hook, que va a devolver el token que guardamos en localstorage
*/
function useToken() {
  // Los datos que devuelve el hook los devolvemos como variables de estado
  const [token, setToken] = useState("");
  const [tokenData, setTokenData] = useState(null);

  const updateToken = () => {
    console.log("updating token");
    const recoveredToken = localStorage.getItem("token");
    setToken(recoveredToken);
    parseToken(recoveredToken);
  };

  //Esta función descifra los datos que hay dentro del token
  const parseToken = (token) => {
    const splittedToken = token.split(".");
    const chunkWithData = splittedToken[1];
    setTokenData(JSON.parse(atob(chunkWithData)));
  };

  // Solo queremos actualizar el token cuando montamos el componente, por eso usamos useEffect
  useEffect(() => {
    updateToken();
  }, []);

  // Devolvemos las variables de estado que creamos
  return { token, tokenData, updateToken };
}

export default useToken;
