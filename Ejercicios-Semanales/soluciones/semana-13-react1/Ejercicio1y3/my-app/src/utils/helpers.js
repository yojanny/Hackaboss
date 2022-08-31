function getRandomNumber(max){

  //Más fácil pero menos aleatorio
  return Math.round(Math.random() * max)

  //Más aleatorio
  return Math.floor(Math.random() * (max + 1))
}


function getRandomRGB(){
  return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`
}


export {
  getRandomNumber,
  getRandomRGB
}