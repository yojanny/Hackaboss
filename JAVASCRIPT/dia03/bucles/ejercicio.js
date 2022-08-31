"use strict"

//Crear un bucle que vaya de 0 a 100 incrementando de 10 en 10

/* for(let i = 0; i <= 100; i+=10){
  console.log(i)
}
 */

//Crear un bucle que vaya de 50 a 20 de uno en uno

/* for(let i = 50; i >= 20; i--){
  console.log(i)
} */


// Crear un bucle que recorra todos los números de 1 a 10 y nos diga sin son pares o impares

for(let i=1; i <= 10; i++){
  if(i%2===0){
    console.log(i + " es par")
  } else{
    console.log(i + " es impar")
  }
}
