"use strict"

// 1- Crea la función isEven. Recibirá un número y devolvera true si el numero es par, y false si es impar 
// (Un numero es par cuando al dividirlo entre 2, no hay resto, es decir, no da decimales)

function isEven(num){
  if(num % 2 === 0){
    return true
  }
  return false
}



//2- Crea la función isDivisible. Recibe dos numeros y devuelve true si el primero es divisible entre el segundo, y false si no.
//(Un numero es divisible entre otro, cuando esa división, no tiene resto, es decir, no da decimales)

function isDivisible(dividendo, divisor){
  if(dividendo % divisor === 0){
    return true
  }
  return false
}

console.log(isDivisible(34, 
  5))


// 3 - Crea la función isPrime. Recibe un número y devuelve true si es primo y false si no
//(Un numero es primo cuando no es divisible entre ningún número entre el 1 y él mismo, no incluidos)


function isPrime(num){
  for (let i = 2; i < num; i++){
    if(isDivisible(num, i)){
      return false
    }
  }
  return true
}

console.log(isPrime(5))


//4 - Crea una funcion que reciba un número y saque por consola todos los primos desde 2 hasta ese número.
// OJO! Esta función solo saca cosas por consola, NO DEVUELVE NADA

function primos(num){
/*   if(num < 2){
    console.log("Numero demasiado bajo")
  } */
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){

      console.log(i)
    }
  }
}

primos(50)