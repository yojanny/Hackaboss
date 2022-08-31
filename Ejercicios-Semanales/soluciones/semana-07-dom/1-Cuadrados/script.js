"use strict";

//Seleccionamos los elementos necesarios
const lista = document.querySelector("ul")
const boton = document.querySelector("button")

//Los cuadrados los guardo como array (creando un nuevo array y metiendo dentro el spread del NodeList) para poder hacer push de los nuevos
const cuadrados = [...document.querySelectorAll("li")]



//Funcion para obtener un entero hasta un maximo
function getRandomInt(max){
  return Math.round(Math.random() * max)
}


//Funcion para obtener un color rgb aleatorio
function getRandomColor(){
  return `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
}


//Funcion que recorre todos los cuadrados y les cambia el fondo
function changeSquaresColor(){
  for(const cuadrado of cuadrados){
    cuadrado.style.background = getRandomColor()
  }
}


//Intervalo para que el cambio sea periodico
setInterval(changeSquaresColor, 500)

//Llamo a la función una vez para que los caudrados tengan un color aleatorio desde el principio
changeSquaresColor()


//Funcion para añadir cuadrados
function addSquare(){

  //Creo el elemento cuadrado
  const li = document.createElement("li")

  //Le asigno un color de fondo aleatorio para que no aparezca en blanco
  li.style.background = getRandomColor()

  //Añado el cuadrado al contenedor en el DOM
  lista.append(li)

  //Añado el elemento también al array para que lo tenga en cuenta cuando cambie el fondo
  cuadrados.push(li)
}

//Añado la función al botón
boton.addEventListener("click", addSquare)