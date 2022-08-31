"use strict"

//Vamos a tener 3 variables: 2 de números y una de operador (string)
//En base al operador haremos la operación correspondiente con los números
// suma, resta, multiplicación y división

/* let numA = 6;
let numB = 4;
let operador = "x"; */
// en este caso por consola debe salir 10 (6 * 4)
// si el operador es - saldrá 2 ( 6 - 4)
// así sucesivamente sin cambiar el codigo, solo la variable operador


let numA = 6;
let numB = 4;
let operador = "/"; 

//Prompt permite al usuario introducir datos

numA = prompt("Introduce un numero");
operador = prompt("Introduce el operador (+, -, x, /)"); 
numB = prompt("Introduce el segundo numero");


//SWITCH

switch(operador){
  case "+":
    //la forma mas sencilla de convertir texto a numero es poner + delante
    console.log(+numA + +numB);
    break;

  case "-":
    console.log(numA - numB)
    break;

  case "x":
    console.log(numA * numB)
    break;

  case "/":
    console.log(numA / numB)
    break

  default:
    console.log("operacion no reconocida")

}

//Con variable para resultado

let resultado;

switch(operador){
  case "+":
    resultado = (numA + numB);
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

console.log("el rsultado de " + numA + operador+numB + " es " + resultado)