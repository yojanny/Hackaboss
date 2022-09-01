import { useState } from "react";

function ControlledForm() {
  const [inputData, setInputData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Peticion al servidor con ", inputData);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target.value.length <= 5) {
      setInputData(e.target.value.toUpperCase());
    }
  };

  return (
    <section>
      <h2>Controlled Form</h2>
      <form onSubmit={submitHandler}>
        <input value={inputData} onChange={changeHandler} />
        <button type="submit">Enviar Controlled</button>
      </form>
      Contenido del formulario: {inputData}
    </section>
  );
}

export default ControlledForm;

