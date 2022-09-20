import { useState } from "react";

/*
  Ejemplo básico de formulario
  Tiene problemas, porque lo que tiene en su estado y lo que aparece en el input se pueden desvincular
*/
function Basic() {
  const [inputData, setInputData] = useState("Aun no han escrito nada");

  /*
    Este callback se ejecuta cuando hacemos submit en el formulario
    Normalmente lo usaríamos para enviar una petición al servidor
    o actualizar el estado de alguna variable añadiendo datos
  */
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Peticion al servidor con ", inputData);
  };

  /* Este callback se ejecuta cada vez que hay un cambio en uno de los inputs y actualiza el estado */
  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e);
    setInputData(e.target.value.toUpperCase());
  };

  return (
    <section>
      <h2>Basic Form</h2>
      {/* onSubmit se ejecuta con el evento submit del formulario */}
      <form onSubmit={submitHandler}>
        {/* Onchange se actualiza cada vez que cambia el valor del input */}
        <input onChange={changeHandler} />
        {/* No tenemos onClick en este boton porque usamos el evento de submit */}
        <button type="submit">Enviar Basic</button>
      </form>
      Contenido del formulario: {inputData}
    </section>
  );
}

export default Basic;
