"use strict";

// const edad = prompt("¿Cuántos años tienes?");

// if (edad <= 10) {
//   alert("El usuario tiene 10 años o menos");
// } else if (edad <= 20) {
//   alert("El usuario tiene entre 11 y 20 años");
// } else {
//   alert("El usuario tiene más de 20 años");
// }

// if (edad <= 10) {
//   alert("El usuario tiene 10 años o menos");
// }

// if (edad <= 20) {
//   alert("El usuario tiene 20 años o menos");
// }

const fruta = prompt("¿Qué fruta te gusta?");

if (fruta === "manzana") {
  alert("Te gusta la manzana");
} else if (fruta === "sandia") {
  alert("Te gusta la sandía");
} else {
  alert("Que mal gusto tienes!");
}

switch (fruta) {
  case "manzana":
    alert("Te gusta la manzana");
    break;
  case "sandia":
    alert("Te gusta la sandía");
    break;
  default:
    alert("Que mal gusto tienes!");
}
