"use strict";

// Aplica estilos a la tabla del index.html para que las asignaturas aprobadas (5 o más) se muestren de color verde y las suspensas en rojo.

//Puedes elegir si el color se aplica al texto o al fondo.

//Pista: todas las notas son etiquetas td y no hay ningún td que no sea una nota


const notas = document.querySelectorAll("td")



for(const nota of notas){
console.log(nota.textContent)

if(nota.textContent >= 5){
  nota.style.color = "green"
} else{
  nota.style.color = "red"
}
}