"use strict";

const min = 0;
const max = 100;
const tries = 5;

//Funcion que genera numero aleatroio con un máximo
function generatePassword(max){
let randomNum = Math.random() * max;
let roundedNum = Math.round(randomNum)

return roundedNum
}

//Funcion que genera numero aleatorio con minimo y máximo
function generatePasswordMinMax(min, max){
  let randomNum = (Math.random() * (max - min)) + min;
let roundedNum = Math.round(randomNum)

return roundedNum
}

//console.log(generatePasswordMinMax(50, 100))




function bomb(min, max, tries){
  //Genero contraseña
  const pass = generatePasswordMinMax(min, max)
  console.log(pass)


  //Bucle para repetir intentos
for(let i = 0; i < tries; i++){
  //Pido al usuario que introduzca un numero (y convierto a numero)
  const userPass = +prompt("Introduce un número")

  //Si el numero coincide con la contraseña, aparece mensaje "has ganado"
if(userPass === pass){

  // Return para parar la función
  return alert("Has ganado!")

} else if( userPass < pass){
  alert("El número introducido es demasiado pequeño")
} else {
  alert("El número introducido es demasiado grande")
}
}

// Cuando se acaban los intentos (el bucle) muestro mensaje de derrota
alert("Has perdido 😢")

}

//bomb(min, max, tries)

//bomb(0, 100, 5)



// OPTIMIZADO UX

function bombUX(min, max, tries){
  //Genero contraseña
  const pass = generatePasswordMinMax(min, max)
  console.log(pass)


  //Bucle para repetir intentos
for(let i = 0; i < tries; i++){
  //Pido al usuario que introduzca un numero (y convierto a numero)
  const userPass = +prompt(`Introduce un número entre el ${min} y el ${max}`)

  //Si el numero coincide con la contraseña, aparece mensaje "has ganado"
if(userPass === pass){

  // Return para parar la función
  return alert("Has ganado!")

} else if( userPass < pass){
  alert(`El número ${userPass} es demasiado pequeño. Te quedan ${tries - i -1} intentos.`)
} else {
  alert(`El número ${userPass} es demasiado grande. Te quedan ${tries - i -1} intentos.`)
}
}

// Cuando se acaban los intentos (el bucle) muestro mensaje de derrota
alert(`Has perdido 😢
La contraseña era ${pass}`)

}

bombUX(min, 50, tries)