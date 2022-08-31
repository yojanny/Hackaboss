"use strict";

/* ASIGNACION (=) */

/* Para asignar un valor a una variable */

const miVariable = "lo que sea"

const copiaVariable = miVariable

console.log(copiaVariable)

const suma = 3+5

const var1 = "a"
const var2 = 4


/* OPERADORES LOGICOS */
/* Devuelven true o false */

// Comparacion estricta (Igual que) (===)

console.log(3 === 3) //true
console.log(3 === 5) //false
console.log(3 === "3") //false
console.log("a" === "a" )//true
console.log(var1 === var2) //"a" = 4? false
console.log(var1 === "a") //"a" = "a" true


//Diferencia estricta (distinto que) (!==)

console.log(3 !== 3) //false
console.log(3 !== 5) //true
console.log(3 !== "3") //true
console.log("a" !== "a") //false
console.log(var1 !== var2) //"a" != 4? true
console.log(var2 !== 4) //4 !== 4? false


//Mayor que (>)

console.log(3 > 2) //true
console.log(3 > 5) //false
console.log(3 > 3) //false
console.log(var2 > 2) //true

//Menor que (<)
console.log(3 < 2) //false
console.log(3 < 5) //true
console.log(3 < 3) //false


//Mayor o igual (>=)
console.log(3 >= 2) //true
console.log(3 >= 5) //false
console.log(3 >= 3) //true

//Menor o igual que (<=)
console.log(3<=2) //false
console.log(3<=5) //true
console.log(3<=3) //true



///

// Y (las dos condiciones se cumplen, son true)(&&)

console.log(var1 === "a" && var2 === 4)//true && true = true

console.log(5 < 7 && 5 > 3) // true

console.log(var1 === "a" && var2 > 8) //true && false = false

console.log(5 > 7 && 5 < 3) //false && false = false


// O (alguna de las condiciones se cumple, es true) (||)

console.log(var1 === "a" || var2 === 4) //true || true = true

console.log(5<7 || 5 === 3) //true || false = true

console.log(5 >7 || 5 < 3) //false || false = false


//Se pueden encadenar y usar parentesis para dar preferencia

console.log((var1 === "a" || var2===3) && (5 > 3 || 5 < 4))




//Negacion (lo contrario) (!)

console.log(!true) //false

console.log(!false) //it's funny because it's true

console.log(!(5>3)) //false



const edad = prompt("Introduce tu edad")

console.log(edad >= 18)