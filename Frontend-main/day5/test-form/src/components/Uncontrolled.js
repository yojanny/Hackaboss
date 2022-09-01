import { useRef } from "react";

function Uncontrolled() {
  const inputRef = useRef("patata");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current[0].value, inputRef.current[1].value);
  };

  return (
    <section>
      <h2>Uncontrolled Form</h2>
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

