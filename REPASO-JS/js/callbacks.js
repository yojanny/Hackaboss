"use strict";

// const saludar = () => {
//   console.log("Hola!");
// };

// const repetir = (callback, nVeces) => {
//   console.log(callback, nVeces);

//   for (let i = 0; i < nVeces; i++) {
//     callback();
//   }
// };

// repetir(saludar, 5);

const traducirEN = (texto) => {
  if (texto === "hola") {
    return "hello";
  } else if (texto === "adios") {
    return "bye";
  } else {
    return "text not permitted";
  }
};

const traducirES = (texto) => {
  if (texto === "hello") {
    return "hola";
  } else if (texto === "bye") {
    return "adios";
  } else {
    return "texto no permitido";
  }
};

// traductor(traducirES, "hello");

// traductor(traducirEN, "hola");

// traductor((texto) => {
//   if (texto === "hola") {
//     return "ola";
//   } else if (texto === "adios") {
//     return "adeus";
//   } else {
//     return "texto non permitido";
//   }
// }, "hola");

// traductor(function (texto) {
//   if (texto === "hola") {
//     return "ola";
//   } else if (texto === "adios") {
//     return "adeus";
//   } else {
//     return "texto non permitido";
//   }
// }, "hola");

const traductor = (funcionTraductora, texto) => {
  console.log(funcionTraductora(texto));
};

traductor((texto) => {
  if (texto === "hola") {
    return "bonjour";
  } else if (texto === "adios") {
    return "adieu";
  } else {
    return "texto no permitido";
  }
}, "adios");
