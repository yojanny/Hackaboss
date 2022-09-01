import { useState } from "react";

function Basic() {
  const [inputData, setInputData] = useState("Aun no han escrito nada");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Peticion al servidor con ", inputData);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e);
    setInputData(e.target.value.toUpperCase());
  };

  return (
    <section>
      <h2>Basic Form</h2>
      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} />
        <button type="submit">Enviar Basic</button>
      </form>
      Contenido del formulario: {inputData}
    </section>
  );
}

export default Basic;

