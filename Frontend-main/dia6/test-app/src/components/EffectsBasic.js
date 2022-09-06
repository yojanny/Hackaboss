import { useEffect } from "react";

function EffectsBasic({ counter }) {
  useEffect(() => {
    console.log("Solo ejecuto este cuando monto");

    return () => {
      console.log("Solo ejecuto este cuando desmont");
    };
  }, []);

  useEffect(() => {
    console.log("Se ejecuta al cambiar la prop counter");

    return () => {
      console.log("Solo ejecuto este cuando desmonto, counter");
    };
  }, [counter]);
  return <h1>Effects {counter}</h1>;
}

export default EffectsBasic;
