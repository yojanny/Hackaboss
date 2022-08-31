"use strict";

let numA = 4;
let numB = 5;


// CONCATENACION O SUMA (+)
const suma = numA+numB

console.log("suma: ", suma)

//// Concatenacion (sumar strings)
const str1 = "Hola"
const str2 = "mundo"

const frase = str1 + " " + str2
console.log(frase)

console.log("4" + 2)

console.log(2 + "2" + 2)

console.log(2 + 2 + "2" + 2)


//RESTA (-)
console.log("resta:", numA-numB)

console.log("8" - numA)


//MULTIPLICACION (*)
console.log("multiplicacion:", numA*numB)


// DIVISION (/)
console.log("division:", numB/numA)


//MODULO (%)
//Devuelve el resto de la division
console.log("modulo:", numB%numA)


//POTENCIA (**)
console.log("potencia:", numA**numB)


console.log(numA, numB)

////////////////////////////////////

// AUTO ASIGNACION
let puntos = 5;

//// Unarios

///// Incremento
puntos++ // puntos = puntos + 1
puntos++

console.log("incremento", puntos)

///// Decremento
puntos-- // puntos = puntos -1

console.log("decremento:", puntos)


//// Binarios

///// SUMA
puntos += 4 // puntos = puntos + 4

console.log("suma", puntos)


///// RESTA
puntos -= 3 // puntos = puntos - 3

console.log("resta", puntos)


///// MULTIPLICACION
puntos *= 2 // puntos = puntos * 2

console.log("multplicacion:", puntos)


///// DIVISION
puntos /= 7 // puntos = puntos / 7

console.log("division:", puntos)


///// MODULO
puntos %= 3 // puntos =  puntos % 3
console.log("modulo:", puntos)


//POTENCIA
puntos**=2 // puntos = puntos ** 2

console.log("potencia:",puntos)



/////////////////////
/* Cuando hacemos operaciones con strings 
(excepto concatenacion), si puede convierte 
el string a nmero y hace la  operacion sin problema*/

console.log("4" / "2") //2

/* Si no pude convertirlo, da NaN (Not a Number) */

console.log("aa" / 2) //NaN



/////////////////

//ORDEN DE PRIORIDAD

/* JavaScript sigue el orden de prioridad matemtico
potencias > multiplicaciones/divisiones > sumas/restas */

console.log(4+2*3) // = 4 + 6 = 10

/* Se pude dar prioridad con parntesis */

console.log((4+2)*3) // = 6 * 3 = 18