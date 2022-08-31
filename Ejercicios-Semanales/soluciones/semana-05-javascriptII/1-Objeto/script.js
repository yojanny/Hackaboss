"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};


function printAdult(obj){
  for(const name in obj){
  if(obj[name] >= 18){
    console.log(`${name} es mayor de edad`)
  } else {
    console.log(`${name} es menor de edad`)
  }
  }
}

printAdult(people)


function printAdultv2(obj){
  for(const name in obj){
    let adult;
    const edad = obj[name]
    if(edad >= 18){
      adult = "mayor"
    } else {
      adult = "menor"
    }

    console.log(`${name} es ${adult} de edad`)
  }
}

//printAdultv2(people)