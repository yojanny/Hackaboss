"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];


//funcion para obtener totales
function getTotal(arr){

  //Variable para almacenar el total
  let total = 0;

  //Rocorro los numeros y los voy sumando al total
  for(const num of arr){
    total += num
  }

  //Devuelvo el total
  return total
}


//Función para crear un nuevo array con copias de los objetos
function cloneObjArr(objArr){

  //Creo el nuevo array
  let newArr = [];

  //Recorro el original
  for(let obj of objArr){

    //Por cada objeto meto al nuevo array un nuevo objeto con el contenido del original

    //Aprovecho y añado el total
    let total = getTotal(obj.puntos)
    newArr.push({...obj, total})
  }

  // Devuelvo el nuevo array
  return newArr
}


function mejorPeor(objArr){
  //Llamo a la función que clona y añade los totales
  const arrClon = cloneObjArr(objArr)

  //Asuma que el mejor y el peor son el primero, para ir comparando luego
  let mejor = arrClon[0]
  let peor = arrClon[0]

  //Recorro los equipos
  for(const equipo of arrClon){

    //Si el total del equipo actual es mayor qu el total de considerado mejor, el mejor pasa a ser el actual
    if(equipo.total > mejor.total){
      mejor = equipo
    }

  
    //Si el total del equipo actual es menor que el total del considerado peor, el peor pasa a ser el actual
    if(equipo.total < peor.total){
      
      peor = equipo
    }
  }


  //Saco las frases por consola
  console.log(`El mejor equipo es ${mejor.equipo} con ${mejor.total} puntos.`)

console.log(`El peor equipo es ${peor.equipo} con ${peor.total} puntos.`)

}

mejorPeor(puntuaciones)



////////
//CON MÉTODOS FUNCIONALES

function mejorPeorFuncionales(objArr){

  //Aplico un map para crear un nuevo array y en cada posición añado un clon del objeto que toque.
  //Además aprovecho para añadir el total con un reduce del array de puntos
  const clonTotales = objArr.map(obj => {
    return {...obj, total: obj.puntos.reduce((acc, current) => acc + current)}
  })

  //Ordeno los equipos según sus puntos
  clonTotales.sort((a, b) => a.total - b.total)

  //El que queda de primero es el peor
  const peor = clonTotales[0]

  //El que queda de último es el mejor
  const mejor = clonTotales[clonTotales.length -1]

    //Saco las frases por consola
  console.log(`El mejor equipo es ${mejor.equipo} con ${mejor.total} puntos.`)

console.log(`El peor equipo es ${peor.equipo} con ${peor.total} puntos.`)
}

mejorPeorFuncionales(puntuaciones)
