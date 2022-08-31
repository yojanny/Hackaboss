"use strict"

//BUCLE WHILE

/* while(condicion){
  //codigo que se repite
} 
*/

/* IMPORTANTE:
el bucle se seguirá ejecutando mientras la condicion sea true.
El código no continuará hasta que el bucle se acabe ( cuando la condcicion sea false)

Por lo tanto, en pricipio, para evitar que sea infinito, debemos hacer que la condicion pase a fasle, desde DENTRO del bloque del bucle.
*/

let age = 15;

while( age < 18){
  console.log("es menor")
  age++ // age = age +1
}



let num = Math.random()



// Cantidad de vueltas aleatoria
while(num < 0.8){

  num = Math.random()

  console.log(num)

}


let palabra;

while(palabra !== "STOP"){
  palabra = prompt("Introduce STOP para parar")

  console.log("sigue")
}


/* console.log(Math.random() * (10-5) + 5)

 */


// BUCLE DO... WHILE

//Se ejecuta al menos una vez, aunque nnunca se cumpla la condicion

/* 
do {
  //codigo que se repite
} while ( condicion)
*/

age = 17;

do{
  console.log("Eso se ejecuta una vez si la condicion no se cumple. Las que haga falta si se cumple")

  age--
} while(age >= 18)


age = 17

while(age>=18){
  console.log(
    "se ejecuta?"
  )

  age--
}