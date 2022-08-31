"use strict";


//FUNCIONES ASÍNCRONAS

const myPromise = new Promise((resolve, reject) =>{

  const num = Math.round(Math.random() * 10)

  /* if(num % 2){
    reject("Error: salió impar")
  } */


  setTimeout(() => resolve(num), 2000)
})


async function duplicarParAleatorio(){
  let num = await myPromise

  const doble = num * 2

  return doble
}

async function duplicarDoble(){
  const doble = await duplicarParAleatorio()

  console.log(doble * 2)

  return doble * 2
}

duplicarDoble().then(res => console.log(res))