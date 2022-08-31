"use strict"

// # Ejercicio JavaScript

// Edita el archivo script.js para añadir las variables de nombre y edad del ejercicio anterior.

let nombre = "Zoe";
let edad = 40;

// A continuación, utiliza un condicional para sacar por consola la frase correspondiente de la siguientes:

// - A _nombre_ le corresponde el descuento infantil (menores de 12).
// - A _nombre_ le corresponde el descuento juvenil (menores de 30).
// - A _nombre_ le corresponde el descuento de jubilados (mayores de 60).
// - A _nombre_ no le corresponde ningún descuento.




if(edad <= 12){
  console.log(`A ${nombre} le corresponde el descuento infantil.`)
} else if ( edad <= 30){
  console.log(`A ${nombre} le corresponde el descuento juvenil.`)
} else if (edad >= 60){
  console.log(`A ${nombre} le corrsponde el descuento de jubilados.`)
} else {
  console.log(`A ${nombre} no le corresponde ningún descuento.`)
}

/* LOGICA:
Si la edad es menor que 12, es infantil.
Si no es menor que 12, pero si menor que 30, es juvenil.
Si es mayor que 60, es de jubilados.
En cualquier otro caso, no hay descuento.

Todo es un condicional
*/