"use strict"

//CONDICIONAL SWITCH

/* 
switch (variableAComparar){
  case posibleValor1:
    //codigo que se ejecuta si variable = valor1
    break;
  case posibleValor2:
    //codigo que se ejecuta si variable = valor2

    break;

  default:
    //codigo que se ejecuta si no coincide con ningun valor

    break;
}
*/

const mascota = "perro";

switch (mascota){
case "gato":

  console.log("es un gato");

  break;

case "perro":
  console.log("es un perro")
  break

case "loro":
  console.log("es un loro")
  break;

default:
  console.log("Desconocido")
  break

  case "pez":
    console.log("es un pez")
    break
}


// Podemos agrupar varios case

switch (mascota){
  case "gato":
  case "perro":
    console.log("tiene 4 patas")
    break;

  case "loro":
    console.log("Tiene 2 patas")
    break;

  case "pez":
    console.log("Tiene aletas")
    break

    default:
      "Desconocido"
}

// Podemos encadenar resultados si no ponemos el break


var foo = 8;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

