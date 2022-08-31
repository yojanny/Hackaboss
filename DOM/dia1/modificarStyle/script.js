"use strict"

//LEER ESTILOS

// La propiedad style nos permite leer y modificar los estilos del elemento

// ¡OJO! En realidad es el atributo style (estilos en linea)

const titulo = document.querySelector("h1")


//Sale vacio porque no está en el atributo style
console.log(titulo.style.fontFamily) /* Las propiedades son las mismas pero en lowerCamelCase: font-family = fontFamily */

//Este si sale porque está en linea
console.log(titulo.style.color)


//Para leer los estilos que realmente tiene
console.log(window.getComputedStyle(titulo).fontFamily)


//MODIFICAR ESTILOS

titulo.style.color = "purple"

titulo.style.color = "rgb(150, 50, 200)"

titulo.style.fontSize = "3rem"

titulo.style.background = "#FF99FF"

titulo.style.cssText = "color: blueviolet; background: lightblue; font-style: italic"