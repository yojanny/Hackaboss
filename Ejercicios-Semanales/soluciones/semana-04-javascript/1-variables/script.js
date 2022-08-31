"use strict"


// # Ejercicio JavaScript

// Edita el archivo script.js para añadir tres variables: nombre (string), color (string) y edad (number).

let nombre = "Zoe";

let edad = 28;

let color = "violeta"


// Después, utiliza esas variables para que salga por consola el mensaje "Hola, me llamo _nombre_, tengo _edad_ años y mi color favorito es el _color_."


const frase = "Hola, me llamo " + nombre + ", tengo " + edad + " años y mi color favorito es el " + color + "."

console.log(frase)

console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y mi color favorito es el ${color}.`)