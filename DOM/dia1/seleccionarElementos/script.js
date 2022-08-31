"use strict"

//SELECCIONAR ELEMENTOS 
//MÉTODO ANTIGUO

// Por etiqueta

const titulos = document.getElementsByTagName("h1")

console.log(titulos[0])

const parrafos = document.getElementsByTagName("p")

console.log(parrafos)

// Por id
const unico = document.getElementById("unico")

console.log(unico)

//Por clase
const especiales = document.getElementsByClassName("especial")

console.log(especiales)


////////////////////

//MÉTODO MODERNO
//Un elemento (el primero que coincida)
// document.querySelector(/* Selector */)

const body = document.querySelector("body")
console.log(body)

const titulo = document.querySelector("h1")

console.log(titulo)

const parrafo = document.querySelector("p")

console.log(parrafo)

const unico2 = document.querySelector("#unico")

console.log(unico2)

const especial = document.querySelector(".especial:nth-of-type(3)")

console.log(especial)


//Varios elementos
//document.querySelectorAll(/* selector */)

const parrafos2 = document.querySelectorAll("p")

console.log(parrafos2)

const especiales2 = document.querySelectorAll(".especial")

console.log(especiales2)

