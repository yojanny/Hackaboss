"use strict"

/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 * 
 * ! A partir de aquí es útil usar find, pero se puede con filter
 * 
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];


// 1. Obtén la suma total de todas las edades de las personas.

const edadTotal = persons.reduce(((acc, current) => acc + current.age), 0)

console.log(edadTotal)

//  2. Obtén la suma total de todas las edades de las personas francesas.

const franceses = persons.filter(person => person.country === "FR")

const edadFranceses = franceses.reduce(((acc, current) => acc + current.age), 0)

console.log(edadFranceses)

///// En una linea
const edadFranceses2 = persons.filter(person => person.country === "FR").reduce(((acc, current) => acc + current.age), 0)

console.log(edadFranceses2)


// 3. Obtén un array con el nombre de todas las mascotas.

const mascotas = persons.map(person => person.pet.name);

console.log(mascotas)

//4. Obtén un array con las personas que tengan gato.

const conGato = persons.filter(person => person.pet.type === "gato")

console.log(conGato)

const nombresConGato = conGato.map(person => person.name)

console.log(nombresConGato)


// 5. Obtén un array con los coches de los españoles.

const espanoles = persons.filter(person => person.country === "ES")

const matriculasEspanoles = espanoles.map(person => person.car)

const cochesEspanoles = matriculasEspanoles.map(matricula => cars.find(car => car.id === matricula))

console.log(cochesEspanoles)

const cochesEspanoles2 = persons.filter(person => person.country === "ES").map(person => cars.find(car => car.id === person.car))

console.log(cochesEspanoles2)

const cochesEspanoles3 = cars.filter(car => persons.filter(person => person.country === "ES").map(person => person.car).includes(car.id))

console.log(cochesEspanoles3)


// 6. Obtén un array con las personas que tengan un coche de la marca Ford.

const fords = cars.filter((car) => car.brand === "Ford")

const personasFords = fords.map(ford => persons.find(person => person.car === ford.id))

console.log(personasFords)

const personasFord2 = cars.filter(car => car.brand === "Ford").map(ford => persons.find(person => person.car === ford.id) )

console.log(personasFord2)

const matriculasFord = cars.filter(car => car.brand === "Ford").map(ford => ford.id)

const personasFord3 = persons.filter(person => matriculasFord.includes(person.car))

console.log(personasFord3)


//  7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda la info de su coche.

const personasCoche = persons.map(person =>{   return {...person, car: cars.find(car => car.id === person.car)}})

console.log(personasCoche)

function addCar(person){
  const car = cars.find(car => car.id === person.car)
  const personCopy = {...person}
  personCopy.car = car

  return personCopy
}

const personasCoche2 = persons.map(addCar)

console.log(personasCoche2)