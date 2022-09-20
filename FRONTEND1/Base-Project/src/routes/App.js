import "./App.css";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { getUser, getUserTweets } from "../http/user-api";
import useToken from "../hooks/useToken";

function App() {
  /* 
    La variable data que sale de useState es solo de lectura, solo debemos acceder a sus datos y nunca modificarla directamente
    Si queremos modificar el contenido de data tenemos que usar la función setData
  */
  const [data, setData] = useState({ dataToShow: "" });
  const [user, setUser] = useState(null);
  const { token, tokenData } = useToken();

  useEffect(() => {
    console.log(token, tokenData);
  }, [token, tokenData]);
  /*
    El primer parametro de useEffect es un callback
    El segundo es opcional
      Si no hay segundo parámetro, useEffect ejecuta el callback en cada render
      Si el segundo parámetro es un array vacío solo ejecuta el callback al montar el componente
      Si el array tiene alguna variable, ejecuta el callback cada vez que una de ellas cambia
    El return del callback del primer parametro es otro callback que se ejecutará al desmontar el componente
  */

  useEffect(() => {
    console.log("MONTA");
    return () => {
      console.log("DESMONTA");
    };
  }, []);

  /* 
    Queremos recuperar los datos de un usuario
    Para hacer la petición solo una vez la meteremos en un useEffect con array vacío de segundo parametro
    El callback de useEffect no puede ser una funcion async
    siqueremos user async/await en useEffect, tenemos que declarar una función nueva dentro del callback e invocarla
    */

  useEffect(() => {
    const handlePromise = async () => {
      setUser(await getUser());
      //console.log(await getUserTweets());
    };
    handlePromise();

    /*
    Este código es equivalente al de arriba pero usando then en lugar de asyn/await
    getUser().then((data)=>{setUser(data)})
    */
  }, []);

  /*
   Renderizado condicional
   A && B si se cumple la condición A renderizaria B. Equivale a un if sin else
   A ? B : C Si se cumple A renderiza B, sino C. Equivale a un if con else
  */
  return (
    <div className="App">
      <h1>USER DATA</h1>
      {user ? (
        <section>
          <h2>id: {user.data.id}</h2>
          <h2>email: {user.data.email}</h2>
        </section>
      ) : (
        <h2>Recuperando datos</h2>
      )}

      <h1>Contenido de data: {data.dataToShow}</h1>
      <button
        onClick={() => {
          setData({ ...data, dataToShow: data.dataToShow + "A" });
        }}
      >
        CONCATENAR
      </button>
    </div>
  );
}

export default App;
