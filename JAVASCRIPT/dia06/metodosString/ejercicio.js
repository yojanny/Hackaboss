"use strict"

//Crea una función que reciba un string y devuelva true si es palínromo y false si no

//Un string es palíndromo cuando se lee igual al derecho y al revés

//Podemos asumir que no va a haber signos de puntuación ni acentos, pero si puede haber mayúsculas y espacios en distintos sitios

const ejString1 = "Arriba la birra"
const ejString2 = "Dabale arroz a la zorra el abad"

function esPalindromo(string){
  let cleanString = string.toLowerCase().replaceAll(" ", "")


  let stringArr = cleanString.split("")

  let reversedArr = stringArr.reverse()

  let reversedString = reversedArr.join("")

  if(cleanString === reversedString){
    return true
  }

  return false


}

console.log(esPalindromo(ejString1))


function esPalindromo2(string){
  string = string.toLowerCase().replaceAll(" ", "")

  if(string === string.split("").reverse().join("")){
    return true
  }

  return false
}

console.log(esPalindromo2(ejString2))

console.log(esPalindromo2("Hola"))