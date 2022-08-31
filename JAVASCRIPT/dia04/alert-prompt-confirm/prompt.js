"use strict";

//Muentra na ventana emergente con un mensaje y un input
//Bloquea la página
//Su valor es lo que el usuario introduzca en el imput (SIEMPRE STRING)

let nombre = prompt("Introduce tu nombre:")

console.log(nombre)

if(!nombre){
  console.log("no hay nombre")
} else {
  console.log(nombre)
}

let edad = prompt("Introduce tu edad:")


//HAY QUE RECORDAR CONVERTIR LOS NUMEROS A NÚMEROS (espacialmente si se van a sumar)
console.log(`dentro de un año tendrás ${+edad + 1} años`)

//OTRAS FORMAS DE CONVERSION
//De strings a números

console.log(Number("3.5"))
console.log(parseInt("3.5")) //solo para enteros
console.log(parseFloat("3.5")) //para decimales