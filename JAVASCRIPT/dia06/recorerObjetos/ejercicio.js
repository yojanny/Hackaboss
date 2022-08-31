"use strict";

//EJERCICIO
//Crea una función que reciba dos objetos y devuelva true si son iguales y false si no.
//En los ejemplos, son iguales los dos primeros

const obj1 = {
  key1: "a",
  key2: "b",
}

const obj2 = {
  key2: "b",
  key1: "a"
}

const obj3 = {
  key1: "a",
  key2: "c"
}

const obj4 = {
  key1: "a",
  key2: "b",
  key3: "c"
}


function sonIguales(objA, objB){

/*   if(Object.keys(objA).length !== Object.keys(objB).length){
    return false
  } */

  const objAarr = Object.keys(objA)
  const objBarr = Object.keys(objB)

  if(objAarr.length !== objBarr.length){
    return false
  }

  for(const key in objA){
    console.log(key)
    console.log("objA:",objA[key])
    console.log("objB:",objB[key])
    if(objA[key] !== objB[key]){
      return false
    }
  }

  return true
}

console.log(sonIguales(obj1, obj2))
console.log(sonIguales(obj1, obj3))
console.log(sonIguales(obj1, obj4))