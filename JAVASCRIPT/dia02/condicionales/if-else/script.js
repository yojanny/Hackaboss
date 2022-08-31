"use strict";

// CONDICIONAL IF
/* 
if(condicion){
  //codigo que se ejecuta si la condicion es true
}
*/

const mascota = "perro"

if(mascota === "gato"){
  console.log("Es un gato")
}


//IF... ELSE
/* if(condicion){
  //codigo que se ejecuta si l condicion es true
} else {
  //codigo que se ejecuta si NO se cumple la condicion
}
*/

if(mascota === "gato"){
  console.log("Es un gato")
} else {
  console.log("no es un gato")
}


//IF... ELSE IF
/* 
if(condicion 1){
  //codigo que se ejecuta si se cumple la condicion 1
} else if(condicion 2){
  //codigo que se ejecuta si NO se cumple la condicion 1 pero SI se cumple la 2
} else {
  //Codigo que se ejecuta si NO se cumple NINGUNA de las condiciones
}


Podemos encadernar todos los else if que queramos y añadir un ultimo else opcional
 */

if(mascota === "gato"){
  console.log("Es un gato")
} else if (mascota === "perro"){
  console.log("No es un gato, es un perro")
} else {
  console.log("no es ni un gato ni un perro")
}

console.log("fin del script")



// Puedo usar cualquier condicion

let num = 14;

if(num > 8 && (num % 2 === 0)){
  console.log("El numero es mayor que 8 y par")
} else if( num > 8){
  console.log("el numero es mayor que 8, pero no es par")
} else if(num % 2 === 0){
  console.log("El numero es par, pero no mayor que 8")
} else if (mascota === "perro"){
  console.log("EL numero no es par ni mayor que ocho. La mascota es un perro")
} else {
  console.log("El numero no es mayor que 8, ni par, ni la mascota es un perro")
}


// Si quiero que las condiciones se evaluen independientemenete, las pongo por separado

if(num > 8 && (num % 2 === 0)){
  console.log("El numero es mayor que 8 y par")
} 

if(num > 8){
  console.log("el numero es mayor que 8")
}

if(num %2 === 0){
  console.log("el numero es par")
}