"use strict";
const input = document.querySelector("input") 

const button =document.querySelector("button")


//LOCAL STORAGE
//Es una pequeña memoria que tiene el navegador


//GUARDAR ELEMENTOS
//localStorage.setItem("clave", "valor")

//¡Ojo! SI ya existe la clave, la sobreescribe

localStorage.setItem("nombre", "Zoe")

button.addEventListener("click", ()=>{
  localStorage.setItem("input", input.value)
})


//Si queremos guardar objetos o arrays, hay que convertirlos a string con JSON.stringify(elemento)


const arr = ["peras", "manzanas"]

localStorage.setItem("array", JSON.stringify(arr))

const obj = {
  user: "Zoe"
}

localStorage.setItem("obj", JSON.stringify(obj))




// LEER ELEMENTOS
// localStorage.getItem("clave")

console.log((localStorage.getItem("nombre")))

console.log(localStorage.getItem("input"))


//Para leer objetos y arrays convertidos a JSON hay que convertirlos de vuelta con JSON.parse(elemento)


console.log(JSON.parse(localStorage.getItem("array")))

console.log(JSON.parse(localStorage.getItem("obj")))



// ELIMINAR UN ELEMENTO
//localStorage.removeItem("clave")

localStorage.removeItem("nombre")



//VACIAR EL LOCAL STORAGE
//localStorage.clear()

//localStorage.clear()