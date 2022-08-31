"use strict";



function isAdult(edad){
  if(edad >= 18){
    return true
  } else {
    return false
  }
}



function seleccionarDescuento(edad){
  if(edad <= 12){
    return "infantil"
  } else if ( edad <= 30){
    return "juvenil"
  }


  if(edad >= 60){
    return "jubilados"
  }
}


/* function imprimirDescuento(nombre, edad){
  const descuento = seleccionarDescuento(edad)

  if(!descuento){
    return `A ${nombre} no le corresponde ningún descuento`
  }

  return (`A ${nombre} le corresponde el descuento ${descuento}.`)
} */

function imprimirDescuento(nombre, edad){
  const descuento = seleccionarDescuento(edad)

  if(!descuento){
    console.log(`A ${nombre} no le corresponde ningún descuento`)

    return
  }

  console.log(`A ${nombre} le corresponde el descuento ${descuento}.`)
}