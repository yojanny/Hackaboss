import { useRef } from "react";

/* 
  Este formulario no es controlado, el estado lo maneja el navegador
  Para acceder a los datos del form cuando se hace submit, usaremos refs
  El control aquí lo tiene el navegador
*/
function Uncontrolled() {
  /* Creamos una ref y la inicializamos a null */
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Para acceder a los datos del form, lo haremos como en el módulo de JS DOM */
    console.log(inputRef);
    console.log(inputRef.current[0].value, inputRef.current[1].value);
  };

  return (
    <section>
      <h2>Uncontrolled Form</h2>
      {/* 
      Vinculamos la ref al form con el atributo ref y ponemos listener de submit
      */}
      <form ref={inputRef} onSubmit={handleSubmit}>
        <input />
        <input />
        <input />
        <input />
        <input />
        <input />
        <button type="submit">Enviar Uncontrolled</button>
      </form>
      Contenido del formulario:
    </section>
  );
}

export default Uncontrolled;
