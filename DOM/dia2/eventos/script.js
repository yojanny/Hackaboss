"use strict"

const titulo = document.querySelector("h1")
const boton = document.querySelector("button")

const body = document.querySelector("body")


console.log(titulo, boton)

//EVENTOS
//https://developer.mozilla.org/en-US/docs/Web/Events

// AÑADIR EVENT LISTENER
// Decirle a un elemensot que esté pendiente de si se produce un evento en él

//.addEventListener("evento", callback)
//Evento: el evento de la la lista de eventos (cuando pasará), callback: qué pasará


function buttonClickHandler(){
console.log("click en el botón")
}


 boton.addEventListener("click", buttonClickHandler) 


 const titleClickHandler = () =>{
  console.log("click en el titulo")
 }

 titulo.addEventListener("click", titleClickHandler)


 titulo.addEventListener("mouseover", ()=>{
  console.log("has pasado el ratón")
 })

 boton.addEventListener("click", ()=>{
  console.log("click")
 })


 // QUITAR EVENT LISTENERS
 //.removeEventListener("evento", callback)

 //En este caso el callback tiene que tener nombre y debimos haberlo añadido con ese nombre

 boton.removeEventListener("click", buttonClickHandler)


 body.addEventListener("click", (event) =>{
  console.log(event)
 })