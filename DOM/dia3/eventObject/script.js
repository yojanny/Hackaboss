"use strict";

const button = document.querySelector("button")


button.addEventListener("click", (e)=>{console.log(e)})


button.addEventListener("click", (e)=>{
  if(e.ctrlKey){
    console.log("Estas pulsando control")
  }

  if(e.shiftKey){
    console.log("Estás pulsando shift")
  }

  if(e.altKey){
    console.log("estás pulsando alt")
  }
})


// EVENTOS DE TECLADO

document.addEventListener("keydown", (e)=>{
  console.log(e)
  if(e.code === "KeyK"){
    console.log("has apretado la k")
  }

  if(e.code === "KeyY" && e.shiftKey && e.ctrlKey){
    console.log("has pulsado ctrl + shift + y")
  }

})



// DETENER EL COMPORTAMIENTO POR DEFECTO

const body = document.querySelector("body")

body.addEventListener("contextmenu", (e)=>{
  e.preventDefault()

  alert("NO PUEDES COPIAR")
})

const enlace = document.querySelector("a")

enlace.addEventListener("click", (e) =>{
  e.preventDefault()
  
  const continuar = confirm("Seguro que quieres continuar?")

  if(continuar){
    const el = e.target
    const url = el.getAttribute("href")
    window.open(url)
  } else{
    console.log("Cancelar")
  }
})


