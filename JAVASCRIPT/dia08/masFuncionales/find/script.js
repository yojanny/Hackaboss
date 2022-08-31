"use strict";

// MÉTODO FIND
// Prácticamente igual a filter, pero en lugar de devolver un array con todods los elementos que cumplan la condición, devuelve solo el primero y sin estar en un array

// El callback recibe un parámetro (cada elemento del array) y opcionalmente el índice y el propio array

// EL callback debe devolver un booleano y en cuanto sea true, el método devuelve el elemento de esa vuelta y para de ejecutarse

// SI no hay ninguna coincidencia, devuelve undefined


const numArr = [5, 8, 15, 57, 24, 32]

const par = numArr.find(num => num%2 === 0)

console.log(par)


const people = [
  {name: "María",
  age: 15
},
{
  name: "Pepe",
  age:25
},
{
  name: "Laura",
  age: 27
}
]

const adult = people.find(person => person.age >= 18)

console.log(adult)

const laura = people.find(person => person.name === "Laura")

console.log(laura)


// LÓGICA DETRÁS DE FIND

function find(arr, callback){
  for (const el of arr){
    if(callback(el)){
      return el
    }
  }
}


console.log(find(people, (person => person.age >= 18)))