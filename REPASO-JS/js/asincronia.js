"use strict";

// PROBLEMA

// const suma = (a, b) => {
//   let resultado;

//   setTimeout(() => {
//     resultado = a + b;
//   }, 2000);

//   return resultado;
// };

// console.log(suma(3, 4));

// SOLUCIÓN CON CALLBACK

// const sumaConCallback = (a, b, callback) => {
//   let resultado;

//   setTimeout(() => {
//     resultado = a + b;
//     callback(resultado);
//   }, 2000);
// };

// sumaConCallback(3, 4, (resultado) => {
//   const resultadoMasDos = resultado + 2;

//   console.log(resultadoMasDos / 2);
// });

// SOLUCIÓN CON PROMESAS

const sumaConPromesa = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// sumaConPromesa(3, 4).then((resultado) => {
//   console.log(resultado);
// });

// async function esperarSumaConPromesa () {

// }

const esperarSumaConPromesa = async () => {
  console.log(await sumaConPromesa(3, 4));

  console.log("final");
};

esperarSumaConPromesa();

console.log("final2");

// primero sale el console.log final2, y luego final
