"use strict";

// OBJETOS
// Son conjuntos de datos con NOMBRE. No tienen orden
/* 
{
  key1: value1,
  key2: value2,
  key3: value3
}
*/

// Los valores pueden ser cualquier cosa (strings, numeros, arrays, objetos, funciones...)


// SON PUNTEROS

// Objeto vacio

const miObj = {}

//Objeto con contenido

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

console.log(mascota)


//SELECCIONAR ELEMENTOS DEL OBJETO

//Sintaxis de punto
// Tenemos que escribir la clave tal cual

console.log(mascota.especie)

console.log(mascota.dueno)

console.log(mascota.dueno.nombre)


//Para ejecutar un método, lo seleccionamos y le ponemos los paréntesis de la llamada
mascota.hablar()


// Sintaxis de corchetes
//Evalúa lo que hay en los corchetes y busca la clave que coincida con el resultado

console.log(mascota["edad"])

let clave = "nombre"

console.log(mascota[clave])

console.log(mascota["pa" + "tas"])



// LOS OBJETOS SON PUNTEROS...
//Para clonarlos... spread (poco profunda)

const mascotaCopia = mascota
// ¡ES EL MIMSO!
console.log(mascotaCopia === mascota)
mascotaCopia.edad = 4

//Para clonarlo bien:
const mascotaClon = {...mascota}
console.log(mascotaClon === mascota)

//Es una copia POCO PROFUNDA. El dueño sigue siendo el mismo objeto

mascotaClon.dueno.nombre = "María"

console.log(mascota)