"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];


//LÓGICA: Creoun nuevo array vacío y voy metiendo elementos del array original solo si no están ya

function cleanArray(arr){
  const newArr = [];

  for(const el of arr){
    if(newArr.indexOf(el) === -1){
      newArr.push(el)
    }
  }

  return newArr
}

const cleanArr = cleanArray(names)

console.log(cleanArr)




// LOGICA: filtrar los elementos dejando solo los que coincidan con su indexOf

function filterArray(arr){
  return arr.filter((el, i) => arr.indexOf(el) === i)
}

console.log(filterArray(names))



////////////
//Lo mismo que la primera opción, pero con bucle nomal

function lista(nombres){
let copia = []
for(let i= 0; i < nombres.length; i++){

if (copia.indexOf(nombres[i]) === -1){

copia.push(nombres[i])

}


}
return copia
}

console.log(lista(names)) 