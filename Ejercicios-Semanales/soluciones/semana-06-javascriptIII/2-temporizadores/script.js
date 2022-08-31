"use strict";


let secondsCounter = 3595;


const secondInterval = setInterval(() => secondsCounter++
, 1000)

function printTime(){
  const seconds = secondsCounter % 60;

  const minutesCounter = Math.floor(secondsCounter / 60)
  const minutes = minutesCounter % 60;

  const hoursCounter = Math.floor(minutesCounter / 60)
  const hours = hoursCounter % 24

  const days = Math.floor(hoursCounter / 24)



  console.log(`Han pasado ${days} día${plural(days)}, ${hours} hora${plural(hours)}, ${minutes} minuto${plural(minutes)} y ${seconds} segundo${plural(seconds)}`)
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
    clearInterval(secondInterval)
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