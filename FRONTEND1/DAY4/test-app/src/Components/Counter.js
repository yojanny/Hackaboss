import { useState } from "react";
import CounterChild from "./CounterChild";

function Counter() {
  /*
  Las variables que declaramos con useState persisten su valor en cada uno
  de los renderizados del componente.
  El parámetro que pasamos a useState es su valor inicial,
  el valor inicial puede ser boolean, array, string, objetos...
  useState devuelve un array con 2 posiciones
  La primera posición del array es el valor deberíamos usarlo como solo lectura y no modificarlo
  La segunda posición es una función que nos sirve para actualizar el valor
  */
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(5);

  /*
  Con este listener incrementamos cada variable de estado a diferente ritmo
  además tenemos otro parámetro a mayores del evento, ver abajo como lo podemos hacer
  */
  const incrementar = (e, cantidad) => {
    e.preventDefault();
    setCount(count + (1 + cantidad));
    setCount2(count2 * (2 + cantidad));
  };

  return (
    <section>
      <h1>Llevas {count} clicks</h1>
      {/*
        En el listener de click queremos que incrementar reciba más parámetros que el evento
        Por eso creamos una arrow function como callback, esta arrow function (e)=>{}
        tiene como parámetro el evento
        Para ejecutar incrementar con más parámetros la ejecutamos dentro de este callback,
        le podemos pasar el evento que recibe el callback y a mayores más parámetros
      */}
      <button
        onClick={(e) => {
          incrementar(e, 0);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          incrementar(2);
        }}
      >
        Incrementar Más
      </button>
      <CounterChild count={count} count2={count2}></CounterChild>
    </section>
  );
}

export default Counter;
