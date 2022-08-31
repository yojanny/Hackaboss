"use strict"


// METODO REDUCE
// Reduce el array a un único elemento*

//*ese "unico" elemento puede ser cualquier cosa: un numero, un string, un booleano, un objeto, un array

// El elemento resultante será lo que quede en el acumulador cuando acabe de recorrer el array

// El callback recibe dos valores: acumulador y valorActual (cada uno de los elementos del array)

// En cada vuelta guarda en el acumulador lo que devuelva el return

//El método puede recibir un segundo parámetro: el inicializador.

//Si se pasa, el acumulador se inicia con ese valor. SI no, coge el valor del primer elemento y se salta la primera vuelta

const numArr = [6, 8, 7, 25, 6]

const total = numArr.reduce((acc, current) => acc + current)

console.log(total)


//Tiene más sentido map, pero SE PUEDE usar reduce
const test = numArr.reduce(((acc, current) =>{
  acc.push(current * 2)
  return acc
}), [])

console.log(test)

const test2 = numArr.reduce(((acc, current, i) =>{
  acc[`clave${i}`] = current
  return acc
}), {})

console.log(test2)



// REDUCE CON OBJETOS



const objArr = [
  {
    objeto: "camiseta",
    precio: 15,
    cantidad: 3
  },
  {
    objeto: "pantalon",
    precio: 30,
    cantidad: 1
  },
  {
    objeto: "calcetines",
    precio: 5,
    cantidad: 5
  }
]

const precioTotal = objArr.reduce(((acc, obj) => acc + (obj.precio * obj.cantidad)), 0)

console.log(precioTotal)


// LOGICA DETRAS DE REDUCE

function reduce(arr, callback, init){
  let acc = init

  for(const el of arr){
    acc = callback(acc, el)
  }

  return acc
}

console.log(reduce(numArr, (acc, el) => acc + el, 0))

