"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];


function mitades(catalogo){

  //Creo un nuevo array en el que ir añadiendo las combinaciones
  const mitadesArr = []

  //Recorro el cátalogo y por cada elemento...
  for(let i = 0; i < catalogo.length; i++){
    const mitad1 = catalogo[i]

    //Vuelvo a recorrer el catálogo y combino cada elemento de este bucle con el del anterior

    //Para que no se repitan las combinaciones al revés empiezo en i para que solo combine con las siguien (y no vuelva hacia atras)

    //Y para que no haya dos mitades iguales, empiezo en la siguiente (i+1)
    
    for(let j = i + 1; j < catalogo.length; j++){
      const mitad2 = catalogo[j]
      //console.log(`${mitad1} y ${mitad2}`)

      //Añado la combinación
      mitadesArr.push(`${mitad1} y ${mitad2}`)
    }

  }

  //Devuelvo el array
  return mitadesArr
}

console.log(mitades(catalogo))