"use strict";

// TARGET
//La propiedad target del evento es el propio elemento que lanza el evento

const lis = document.querySelectorAll("li")

console.log(lis)



function handleLiClick(e){
const li = e.target
if(li.dataset.count){
  li.dataset.count++
} else{
  li.dataset.count = 1
}



li.textContent = `${li.dataset.count} clicks`


//console.log(li)
}


for(const li of lis){
  li.addEventListener("click", handleLiClick)
}



//CURRENT TARGET
//La propiedad .currentTarget del evento es el elemento que tiene asociado el evento


//EVENT DELEGATION
//Técnica que consiste en asociar el evento al padre cuando no podemos o no queremos asociarlo al hijo
//Usamos un condicional para ver si hemos lanzado el evento en el hijo o no

const ul = document.querySelector("ul")

ul.addEventListener("click", (e)=>{
  console.log(e.target)
  console.log(e.currentTarget)
  if(e.target.matches("li")){
    console.log("click en:", e.target)
  }
})