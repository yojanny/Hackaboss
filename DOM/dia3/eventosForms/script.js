"use strict";

const {input} = document.forms[0].elements

const p = document.querySelector("p")

// FOCUS
//Cuando el elemento recibe el foco

input.addEventListener("focus", ()=>{
  console.log("tiene foco")
})


// BLUR
// Cuando el elemento pierde el foco

input.addEventListener("blur", ()=>{
  console.log("ha perdido el foco")
})



//CHANGE
//Cuando el valor cambia y el elemento pierde el foco
input.addEventListener("change", ()=>{
  console.log("Ha cambiado y ha perdido el foco")
})



//INPUT
//Cada vez que hay un cambio 

input.addEventListener("input", ()=>{
  console.log("cambio")

  p. textContent = filtrar(input.value)
})


const arr = ["manzana", "mandarina", "fresa", "naranja", "pera" ]

p.textContent = arr.join(", ")

function filtrar(str){
return arr.filter(el => el.includes(str)).join(", ")
}

