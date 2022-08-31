"use strict";


let seconds = 50;
let minutes = 59;
let hours = 23;
let days = 0;




function printTime(){
  seconds += 5 

  if (seconds >= 60){
    seconds = 0;
    minutes++
  }

  if(minutes >= 60){
    minutes = 0;
    hours++
  }

  if(hours >= 24){
    hours = 0
    days++
  }
 

  console.log(`Han pasado ${days} día${days!== 1? "s" : ""}, ${hours} hora${plural(hours)}, ${minutes} minuto${plural(minutes)} y ${seconds} segundo${plural(seconds)}`)
}

const printInterval = setInterval(printTime, 5000)


function stop(num, unit){

let time = num;
  switch(unit){
    case "D":
      time *= 24
    case "H":
      time *= 60
    case "M":
      time *= 60
    case "S":
     time *= 1000;
  }


  console.log(time)

  setTimeout(() => {
    clearInterval(printInterval)
    console.log("Se ha detenido el programa")
  }, time)
}

stop(1, "M")



function plural(num){
  if(num === 1){
    return ""
} 

return "s"
}