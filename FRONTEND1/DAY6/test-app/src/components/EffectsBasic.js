import { useEffect } from "react";

/*
  En modo desarrollo desde React 18 y en modo estrict
  React monta, desmonta y vuelve a montar los componentes
  por eso al montar se ejecuta 2 veces el useEffect
*/
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
