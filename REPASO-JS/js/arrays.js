"use strict";

const frutas = [
  "naranja",
  "manzana",
  "pera",
  "mandarina",
  "melo" + "cotón",
  "melón",
];

console.log(frutas[4]);

console.log(frutas.length);

console.log(frutas[frutas.length - 1]);

const user = {
  nombre: "pepe",
  apellidos: "gonzalez",
  direcciones: [
    {
      pais: "España",
      localidad: "Madrid",
    },
    {
      pais: "España",
      localidad: "Cambre",
    },
  ],
};

console.log(user.direcciones[0].localidad);
console.log(user["direcciones"][0]["localidad"]);

console.log(Object.entries(user));
