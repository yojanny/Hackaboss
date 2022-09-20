/*
  Como las props son un objeto podemos hacer destructuring y elegir claves concretas
  esto nos ahorra tener que usar "props." dentro del componente
  da igual el orden en el que ponemos el destructuring de los parámetros porque es un objeto
*/
function CounterChild({ count, count2 }) {
  return (
    <h2>
      Cuenta en el hijo a través de props {count} , {count2}
    </h2>
  );
}

export default CounterChild;
