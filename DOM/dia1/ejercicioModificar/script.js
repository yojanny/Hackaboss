"use strict"

/* 
Crear un html que tenga un títlo

En JS, crear una variable nombre, con vuestro nombre

Cambiar el texto del título para que diga "Hola _nombre_" (para eso hay que seleccionarlo primero)
*/


//Crear variable nombre
const nombre = "Zoe"


// Seleccionar el titulo

const titulo = document.querySelector("h1")

console.log(titulo)

//Modificar contenido

titulo.textContent = "Hola " + nombre; /* `Hola ${nombre}` */

console.log(titulo)