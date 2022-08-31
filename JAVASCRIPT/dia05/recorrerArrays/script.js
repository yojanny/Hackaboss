"use strict";

const miArray = ["a", "b", 1, 2]

console.log(miArray)

// PROPIEDAD LENGTH
// array.length
//Indica la cantidad de elementos que hay en el array
// Siempre es 1 más que la última posición

console.log(miArray.length)

//RECORRER CON FOR

for(let i = 0; i < miArray.length; i++){
  console.log(miArray[i])
}



//Función que recibe un array de numeros y devuelve la media de esos números
//La media se calcula sumando todos los números y dividiendo el resultado por la cantidad de números

const ejArr = [2, 5, 7] // (2 + 5 + 7) / 3 = 14 / 3 = 4.66666...

function calcularMedia(arr){
  let suma = 0;
  for(let i = 0; i < arr.length; i++){
    suma += arr[i] // suma = suma + arr[i]
  }
  return (suma / arr.length)
}


console.log(calcularMedia(ejArr))

console.log(calcularMedia([2, 8, 6, 8, 215, 97]))

console.log(calcularMedia([15, -3, 87, -23]))




// RECORRER CON FOR... OF
console.log("///////////////////")

/* 
for(const elemento of array){
  //en cada vuelta "elemento" es un elemento del array
}
*/

const colores = ["rojo", "azul", "amarillo"]

for(const color of colores){
  console.log(color)
}


function calcularMedia2(numArr){
  let suma = 0;
  for(const num of numArr){
    suma += num
  }

  return suma / numArr.length
}

console.log(calcularMedia2(ejArr))