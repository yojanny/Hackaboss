"use strict"

// Muestra una ventana emergente con un mensaje
//Podemos darle a OK o Cancel
//Bloquea la página
//Tiene valor booleano
//(OK = true, cancel = false)

let continuar = confirm("¿Seguro que quieres continuar?");

console.log(continuar)


if(continuar){
console.log("continuar")
}else{
  console.log("abortar")
}