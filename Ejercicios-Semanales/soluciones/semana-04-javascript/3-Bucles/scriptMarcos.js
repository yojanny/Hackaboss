"use strict";

let cucu = "cucú ";


for(let hora = 0; hora < 24; hora++){
if(hora >= 8 && hora <= 22){
console.log(hora + ":00 ➡️ ")

  let repeticion = "";

  for(let i = 0; i < hora; i++){
  repeticion += cucu;
  }

  console.log(repeticion); 
}
}
