"use strict";

  const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]


function validarDNI(dni){
  try {
     if(dni.length !== 10 || typeof dni !== "string"){
    throw new Error("Formato incorrecto: debe tener 10 caracteres")
  }

  const dniArr = dni.split("-")

  if(dniArr.length !== 2){
    throw new Error("El número y la letra deben estar separados por un guion")
  }

  const [nums, letra] = dniArr;

  if(nums.length !== 8 || isNaN(nums)){
    throw new Error("La primera parte deben ser 8 numeros")
  }

  if(letra.length !== 1 || !isNaN(letra)){
    throw new Error("La segunda parte debe ser una letra")
  }

/*   console.log(nums % 23)
  console.log(letras[nums % 23])
  console.log(letra) */

  if(letra.toUpperCase() !== letras[nums % 23]){
    throw new Error("DNI no válido")
  }

  console.log("DNI válido")

  } catch (error) {
    console.error(error.message)
  }
 
}

validarDNI("61509402-l")