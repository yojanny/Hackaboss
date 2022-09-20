import { useState } from "react";

/*
  En los formularios controlados React está al mando de todo lo que pasa en el formulario
*/
function ControlledForm() {
  /*
    En inputData guardaremos los datos del formulario
    inicialmente será un string vacío porque solo tenemos un input en el form
  */
  const [inputData, setInputData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Peticion al servidor con ", inputData);
  };

  /*
    En el handler de un form tenemos que acordarnos de llamar a la función preventDefault del evento
    Si no lo hacemos se recargará la página
    Cada vez que haya un cambio en el input actualizaremos el estado
    En este caso ponemos un limite de longitud de 9 caracteres al dato del input
  */
  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target.value.length <= 9) {
      setInputData(e.target.value.toUpperCase());
    }
  };

  return (
    <section>
      <h2>Controlled Form</h2>
      {/* Al enviar ejecutamos el handler de submit */}
      <form onSubmit={submitHandler}>
        {/* 
        Cada vez que cambie el valor en el formulario ejecutamos el handler que actualiza los valores
        Con value vinculamos lo que tenemos almacenado en el estado a lo que muestra el input
        La combinación entre que React actualice el estado en cada envento y que el input muestre el estado 
        almacenado es lo que convierte este formulario en controlado
         */}
        <input value={inputData} onChange={changeHandler} />
        <button type="submit">Enviar Controlled</button>
      </form>
      Contenido del formulario: {inputData}
    </section>
  );
}

export default ControlledForm;
