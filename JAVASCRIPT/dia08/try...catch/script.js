"use strict";

// TRY... CATCH
//Cuando un bloque de código, debemos meterlo en un bloque try

// EL bloque try siemplre va seguido de un bloque catch y/o finally

// Catch es lo que se ejecuta cuando hay un error en el try. Recibe el error

//Finally se ejecuta siempre al final

const myPromise = new Promise((resolve, reject) =>{

  const num = Math.round(Math.random() * 10)

  if(num % 2){
    reject("Error: salió impar")
  }


  setTimeout(() => resolve(num), 2000)
})


async function duplicarParAleatorio(){
  try {
    let num = await myPromise

  const doble = num * 2

  console.log(doble)
} catch (e){
  console.error(e)
} finally {
  console.log("fin")
}
}

duplicarParAleatorio()



// LANZAR ERRORES

function mostrarContenido(){

  try{
    const edad = prompt("Introduce tu edad")

  if(edad < 18){
    throw new Error("Contenido para mayores de edad")

  }


  console.log("mostrar contenido")

  } catch(error){
    console.error(error.message)
    alert("No puedes continuar")
  }
  
}


mostrarContenido()


//JSON: JavaScript Object Notation