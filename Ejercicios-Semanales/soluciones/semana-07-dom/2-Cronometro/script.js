"use strict"

//Seleccionamos los elementos
const clock = document.querySelector("h1")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")


//Creo un contador para almacenar el tiempo

let counter = 0;

let savedTime = localStorage.getItem("time");

if(saveTime){
  counter = savedTime
  updateClock()
}

let interval;

function format(num){
  if(num < 10){
    return "0" + num
  }

  return num
}


function updateClock(){
  let minutes = Math.floor(counter / 60)
  let seconds = counter % 60

  if(counter % 2){
    clock.textContent = `${format(minutes)} ${format(seconds)}`
  } else {
    clock.textContent = `${format(minutes)}:${format(seconds)}`
  }
  
}


function start(){

  //Para que no se multipliquen los intervalos
  //Opción A: borrarlo antes de crear uno
  /* clearInterval(interval) */

  //Opción B: quitarle el evento al botón
  startButton.removeEventListener("click", start)

  interval = setInterval(() =>{
    counter++
    updateClock()
  }, 1000)
}

function stop(){
  clearInterval(interval)

  //Si le hemos quitado el evento al botón start, se lo volvemos a poner
  startButton.addEventListener("click", start)
}

function reset(){
  stop()

  counter = 0
  updateClock()
}


function saveTime(){
  localStorage.setItem("time", counter)
}




//Asignamos las funciones a los botones
startButton.addEventListener("click", start)
stopButton.addEventListener("click", stop)
resetButton.addEventListener("click", reset)


//Guardo el tiempo al cerrar la página
window.addEventListener("beforeunload", saveTime)