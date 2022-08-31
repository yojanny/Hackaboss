"use strict";

// FETCH
// Es el método para hacer peticiones a fuentes externas

//Se puede hacer fetch a urls de otros servidores (API) o a rutas de archivos JSON de nuestro servidor


/* 
PROBLEMA: fetch siempre devuelve una promesa. Además esa promesa no nos da los datos limpios sino la respuesta de la petición, tenemos que sacar los datos con el método .json() que también devuelve una promesa
*/


// FUNCIÓN GENÉRICA PARA OBTENER LOS RESULTADOS LIMPIOS DE UNA PETICION

async function getData(ruta){
  const response = await fetch(ruta)

  const data = await response.json()

  return data
}


// Petición a archivo JSON

const usuariosData = getData("./usuarios.json")

usuariosData.then(users => console.log(users[0].user))


//Petición a API

const personajesRM = getData("https://rickandmortyapi.com/api/character")

personajesRM.then(data => console.log(data.results))


async function getLocationInfo(i){
  const data = await getData("https://rickandmortyapi.com/api/character")

  const personajes = data.results

  const personaje = personajes[i]

  console.log(personaje)

  const {location} = personaje
  //const location = personaje.location

  const {url} = location
  //const url = location.url

  //const url = data.results[id].location.url

  const locationData = await getData(url)

  console.log(locationData)
}

getLocationInfo(0)

