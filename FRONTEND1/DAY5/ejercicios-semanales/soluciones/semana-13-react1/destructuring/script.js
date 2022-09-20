"use strict";

let user = {
  mascota: {
    nombre: 'Nymeria'
  }
}


//let mascota = user // Estoy dando el nombre mascota al user

let {mascota} = user // Estoy cogiendo el dato mascota de dentro de user


//let {mascota: nombre} = user; // Estoy asignando el nombre nombre a mascota

let {mascota: {nombre}} = user; // Estoy cogiendo el dato nombre de dentro de mascota

console.log(nombre)






let user2 = {
  dob: {
    age: 18
  }
}


let {dob} = user2 // === let dob = user2.dob

let {dob: {age}} = user2 
/* ====

let dob = user2.dob
let age = dob.age

*/