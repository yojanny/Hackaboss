"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) => setTimeout(() => resolve(Math.round(Math.random() * 100)), Math.random() * 1000)) 




//Crea una función que reciba una edad y devuelva una promesa

function checkAge(age){
  return new Promise((resolve, reject)=>{
    //Si la edad es menor a 18 la promesa se rechazará inmediatamente con el mensaje "edad es menor".
    if(age < 18){
      reject("edad es menor")
    }


    //Si la edad es par, la promesa se resolverá al cabo de un segundo con el mensaje "edad es par".
    if(age %2 === 0){
      setTimeout(()=>resolve("Edad es par"), 1000)
    }
    //Si la edad es impar, la promesa se resolverá al cabo de dos segundos con el mensaje "edad es impar".
    else{
      setTimeout(()=>resolve("Edad es impar"), 2000)
    }

  })
}



//Para finalizar el ejercicio debes hacer que se muestre por consola el mensaje correspondiente a llamar a la función con la edad que devuelva la promesa. En caso de que sea rechazada, se mostrará de color rojo "Error: " y el mensaje correspondiente.

// CON THEN

agePromise.then((age) => checkAge(age).then(res => console.log(res))).catch(e => console.error("Error: " + e))


// CON FUNCIÓN ASÍNCRONA
async function print(){
  try{
    const age = await agePromise
  const res = await checkAge(age)

  console.log(res)
}catch(e){
  console.error("Error: " + e)
}
}

print()