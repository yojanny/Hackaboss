"use strict"

const frutas = ["manzana", "fresa", "plátano", "fresa"]


// PUSH: añadir elementos al final
//MODIFICA EL ORIGINAL


frutas.push("pera")

frutas.push("naranja", "limón")

console.log(frutas)



// UNSHIFT: añadir elementos al principio
//MODIFICA EL ORIGINAL

frutas.unshift("mandarina", "cereza")

console.log(frutas)


// POP: elimina y devuelve el último elemento
//MODIFICA EL ORIGINAL


console.log(frutas.pop()) //puedo utilizzarlo directamnete o guardarlo en una variable

console.log(frutas)


// SHIFT elimina y devuelve el primer elemento
//MODIFICA EL ORIGINAL


const primero = frutas.shift()

console.log(primero)
console.log(frutas)


// INDEX OF: devuelve la primera posición del elemento
// Si no existe, devuelve -1
//acepta un segundo paramétro "startPosition"

console.log(frutas.indexOf("fresa"));
console.log(frutas.indexOf("piña"));
console.log(frutas.indexOf("fresa", 3))


// LAST INDEX OF: Exactamente lo mismo, empezando por el final
console.log(frutas.lastIndexOf("fresa"))
console.log(frutas.lastIndexOf("piña"));
console.log(frutas.lastIndexOf("fresa", 3))



// REVERSE: le da la vuelta. 
//MODIFICA EL ORIGINAL

frutas.reverse()

console.log(frutas)

//SPLICE: Elimina elmentos dentro del array y devuelve un nuevo array con esos elmentos
// Sirve para añadir cosas por el medio
//MODIFICA EL ORIGINAL
/* 
array.splice(dondeEmpieza, cuantosQuita, queAñade)
*/

console.log(frutas.splice(2, 2))
console.log(frutas)

frutas.splice(2, 0, "melecotón")
console.log(frutas)


// SLICE: devuelve elementos del array
// NO modifica el original
//array.slice(dondeEmpieza, dondeAcaba). DOnde empieza imcluido, donde acaba, no

console.log(frutas.slice(2, 5))

console.log(frutas)


//JOIN: concatena todos los elementos
// Se puede pasar como parametro un separador. si no, pone comas

//NO modifica el array

console.log(frutas.join())
console.log(frutas.join(", "))
console.log(frutas.join(""))