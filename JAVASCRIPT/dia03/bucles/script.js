"use strict";

// BUCLE FOR

/* CUIDADO CON LOS BUCLES INFINITOS
En caso de que ocurran, abrir el administrador de tareas de chrome(shift + esc) y cerrar la pestaña.
Si no se abre, forzar el cierre de chrome desde el administrador de tareas (ctrl + alt + sup) de windows o desde la consola (killall chrome) */

/* 
for(contador; condicion; modificacion){
  //Codigo que queremos que se repita
}
*/

/* 
let vueltas = 5;
for(let i = 0; i < vueltas; i++){
  //codigo que se repite "vueltas" veces
}
*/

/* for(let i = 0; i < 5; i++){
  console.log(i)
} */


/* for(let i = 8; i <= 13; i+=2){
  console.log(i)
} */

/* for(let i = 25; i >= 10; i--){
  console.log(i)
} */


/* for(let i = 0; i < 5; i++){
  console.log("Hola")
}

for(let i = 0; i < 5; i++){
  if(i%2=== 0){
    console.log("el numero es par")
  } else{
    console.log("el numero es impar")
  }
}
 */

/* for(let i = 0; i < 5; i++){
  console.log("I = ", i)
  for(let j = 5; j > 0; j--){
    console.log("j:", j)
  }
  console.log(" ")
} */


// CONTINUE
//Pasa a la siguiente vuelta

for(let i = 0; i < 5; i++){
  console.log(i)

  if(i===2){
    continue
  }
  console.log("no es 2")
}


// BREAK
//Para el bucle
for(let i = 0; i < 10000; i++){
  console.log(i)
  if(i === 5){
    break
  }
}