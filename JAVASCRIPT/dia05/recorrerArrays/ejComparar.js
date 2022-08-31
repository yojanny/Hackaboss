"use strict";

//Crea una función que reciba dos arrays y devuelva true si son iguales devuelve true y si no, devuelve false

const arr1 = ["a", "b", "c"]
const arr2 = ["a", "b", "c"]
const arr3 = ["a", "d", "c"]
const arr4 = ["a", "b", "c", "d"]

function sonIguales(arrA, arrB){

  if(arrA.length !== arrB.length){
    return false
  }

  for(let i = 0; i < arrA.length; i++){
if(arrA[i] !== arrB[i]){
  return false
}
  }

  return true
}

console.log(sonIguales(arr1, arr2))