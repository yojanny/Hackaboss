import { useRef } from "react";

/*
  Esta función es un ejemplo de como usar refs
*/

function RefsExample() {
  /*
    Creamos varias refs, estas variables se enlazan con el DOM en la parte JSX del componente
    Usamos las refs para formularios no controlados por ejemplo
    También se usan para cosas como librerías de terceros que queremos conectar a nuestro componente
  */
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formRef", formRef);
    console.log("inputRef", inputRef);
    console.log("buttonRef", buttonRef);

    /*
      La ref es un objeto, al vincularla al dom se guarda en el atributo current la información del nodo
      Es este caso como es un form, podemos acceder a los valores de los distintos inputs del form
      como si fuesen un array
    */
    console.log(formRef.current[0].value, formRef.current[1].value);
  };

  return (
    <section>
      <h2>Refs example</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <input />
        <input />
        <input />
        <input />
        <input />
        <button ref={buttonRef} type="submit">
          Enviar Refs
        </button>
      </form>
      Contenido del formulario:
    </section>
  );
}

export default RefsExample;
