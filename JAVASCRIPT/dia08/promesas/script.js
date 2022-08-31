"use strict";

//PROMESAS
// Prometen un resultado y podemos esperar por él

const myPromise = new Promise((resolve, reject) =>{

  const num = Math.round(Math.random() * 10)

  if(num % 2){
    reject("Error: salió impar")
  }


  setTimeout(() => resolve(num), 2000)
})



//THEN
//El método then recibe un callback que ejecuta cuando la promesa se resuelve
//Dicho callback recibe la respuesta de la promesa para que hagamos con ella lo que queramos


//CATCH
// El método catch recibe un callback que se ejecuta cuando la promesa se rechaza
//Dicho callback recibe el mensaje de error

//FINALLY
//El método finally recibe un callback que se ejecuta siempre, después del then o del catch
//No recibe nada


myPromise.then(patata => console.log(patata * 2)).catch( e => console.error(e)).finally(() => console.log("fin"))




console.log(myPromise)