import { useEffect, useState } from "react";

function PersistData() {
  const [data, setData] = useState("");

  /*
  El segundo parametro de useEffect determina cuando se ejecuta su callback
  Si no existe se ejecuta siempre
  Si es un array vacio se ejecuta solo al montar el componente
  Si tiene variables dentro del array se actualiza cuando cambie cualquiera de ellas
  Puedo tener multiples bloque de useEffect en un solo componente
  */

  useEffect(() => {
    /*
      Recuperamos los datos que están guardados en el localStorage y los guardamos en el state
    */
    setData(localStorage.getItem("data"));
    console.log("useEffect monta");
    return () => {
      console.log("useEffect desmonta");
    };
  }, []);

  const handleChange = (e) => {
    setData(e.target.value);
    localStorage.setItem("data", e.target.value);
  };
  return (
    <>
      <h1>Persist</h1>
      <form>
        <input onChange={handleChange} value={data} />
      </form>
      Data: {data}
    </>
  );
}

export default PersistData;
