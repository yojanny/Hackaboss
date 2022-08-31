"use strict";

const user = {
  nombre: "pepe",
  apellidos: "gonzalez",
  edad: 30,
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

// const nombre = user.nombre;
// const apellidos = user.apellidos;
// const edad = user.edad;

const {
  nombre, // nombre: nombre,
  apellidos,
  edad,
  direcciones: [
    { pais: pais1, localidad: localidad1 },
    { pais: pais2, localidad: localidad2 },
  ],
} = user;

console.log(nombre, apellidos, edad, pais1, localidad1, localidad2);

const frutas = [
  "naranja",
  "manzana",
  "pera",
  "mandarina",
  "melocotón",
  "melón",
];

const [fruta1, fruta2, , fruta3] = frutas;

console.log(fruta1, fruta2, fruta3);

const pelicula = {
  nombre: "Buscando a Nemo",
  personajes: ["Nemo", "Dori"],
};

const {
  nombre: nombrePelicula,
  personajes: [personaje1, personaje2],
} = pelicula;

// const {
//   nombre: nombrePelicula,
//   personajes: [, personaje2],
// } = pelicula;

console.log(nombrePelicula, personaje1, personaje2);
