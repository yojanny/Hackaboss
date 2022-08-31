"use strict";

/* 
Crea una variable hora (number).
Escribe un cdigo que saque por consola "Buenos dias" entre las 6 y las 14, "buenas tardes" entre las 14 y las 22 y "buenas noches" entre las 22 y las 6
*/

let hora = 22;

hora = new Date().getHours()

console.log(hora)

if(hora >= 6 && hora < 14){

  console.log("Buenos dias")

} else if (hora >= 14 && hora < 22){
  
  console.log("buenas tardes")

} else /* if ( (hora >= 22 && hora <= 24)|| (hora >= 0 && hora < 6)) */{
  console.log("Buenas noches")
}