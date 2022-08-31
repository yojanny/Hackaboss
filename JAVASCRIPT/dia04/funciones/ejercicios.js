"use strict"


// Convierte el código de la calculadora en una función
//https://gitlab.com/blueoceanstart/hack-a-boss/jsb12co/3-javascript/-/blob/master/dia02/condicionales/switch/ejercicio.js


function calculadora(numA, operador, numB){
  let resultado;

switch(operador){
  case "+":
    resultado = (+numA + +numB);
    break;

  case "-":
    resultado = (numA - numB)
    break;

  case "x":
    resultado = (numA * numB)
    break;

  case "/":
    resultado = (numA / numB)
    break

  default:
    resultado = ("operacion no reconocida")

}

return resultado

}



console.log(calculadora(3, "+", 2)) // 5

console.log(calculadora(6, "-", 4)) // 2

//console.log(calculadora(prompt("numero A"), prompt("operador"), prompt("Numero B")))

function calculadora2(numA, operador, numB){

switch(operador){
  case "+":
    //la forma mas sencilla de convertir texto a numero es poner + delante
    return (+numA + +numB);

  case "-":
    return (numA - numB)

  case "x":
    return (numA * numB)

  case "/":
    return (numA / numB)

  default:
    return ("operacion no reconocida")

}

}

console.log(calculadora2(3, "+", 2)) // 5

console.log(calculadora2(6, "-", 4)) // 2


let userNumA = prompt("introduce un número")
let userOperador = prompt("introduce el operador")
let userNumB = prompt("INtroduce el segundo número")

console.log(calculadora2(userNumA, userOperador, userNumB))