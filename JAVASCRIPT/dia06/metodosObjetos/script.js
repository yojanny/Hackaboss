"use strict";

const mascota = {
  especie: "gato",
  nombre: "Nymeria",
  edad: 3,
  patas: 4,
  vacunado: true,

  //una funcion dentro de un objeto se llama método
  hablar: function(){
    console.log("miau")
  },
  dueno: {
    nombre: "Zoe",
    edad: 28
  }
}

// OBJECT KEYS: devuelve un array con las claves del objeto en el orden en que se escribió

console.log(Object.keys(mascota))



// OBJECT VALUES: Devuelve un array con los valores del objeto en el orden en el que se escribió

console.log(Object.values(mascota))



// OBJECT ENTRIES: Devuelve un array de arrays de dos posiciones cada uno (pareja clave-valor) en el orden en el que se escribió

console.log(Object.entries(mascota))