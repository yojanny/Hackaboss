"use strict";

const mascota = {
  especie: "gato",
  nombre: "Nymeria",
  edad: 3,
  patas: 4,
  vacunado: true,
  hablar: function(){
    console.log("miau")
  },
  dueno: {
    nombre: "Zoe",
    edad: 28
  }
}

// RECORRER OBJETOS

// Bucle for

const keysArr = Object.keys(mascota)

for(let i = 0; i < keysArr.length; i++){
  const key = keysArr[i]
  //console.log(keysArr[i])
  console.log(mascota[key])

}


console.log("/////////////////")

// Bucle for... in

for(const clave in mascota){
 // console.log(clave)
  console.log(mascota[clave])
}



