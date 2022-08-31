"use strict";

const getRandomValue = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error(`Error. El número generado fue ${randomValue}`));
      }
    }, 2000);
  });
};

getRandomValue()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("SE ACABÓ");
  });

const waitForGetRandomValue = async () => {
  try {
    const resultado = await getRandomValue();

    blabla;

    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("SE ACABÓ");
  }
};

waitForGetRandomValue();

const suma = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("A y B deben de ser números");
    }

    return a + b;
  } catch (error) {
    console.error(error);
  }
};

suma(2);
console.log(suma(2, 2));
