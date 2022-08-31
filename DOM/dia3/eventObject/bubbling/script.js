"use strict";

//STOP PROPAGATION
//Para evitar que un padre ejecute su evento por lanzarlo un hijo, usamos el método e.stopPropagation() en el hijo

const button1 = document.querySelector("#bubbles button")
const button2 = document.querySelector("#no-bubbles button")

const articles = document.querySelectorAll("article")

console.log(button1, button2, articles)


button1.addEventListener("click", (e)=>{
  const padre = e.target.parentElement

  padre.remove()
})

button2.addEventListener("click", (e)=>{
  e.stopPropagation()
  const padre = e.target.parentElement

  padre.remove()
})


for(const article of articles){
  article.addEventListener("click", ()=>{
    window.open("http://google.com")
  })
}