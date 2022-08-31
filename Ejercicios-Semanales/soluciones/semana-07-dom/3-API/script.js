"use strict";

const main = document.querySelector("main")


const apiUrl = "https://randomuser.me/api/"

async function getData(url){
  const res = await fetch(url)
  const data = await res.json()
  return data
}


async function getUsers(cantidad){
  const data = await getData(apiUrl + "?results=" + cantidad)

  const rawUsers = data.results

  const users = rawUsers.map(user => {
    return {
      nombreCompleto: `${user.name.first} ${user.name.last}`,
      pais: user.location.country,
      email: user.email,
      foto: user.picture.large
    }
  })

  return users
}




/* const user = {nombreCompleto: 'Liberto Pinto', pais: 'Brazil', email: 'liberto.pinto@example.com', foto: 'https://randomuser.me/api/portraits/men/84.jpg'} */

/* <article>
    <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Imagen de perfil">
    <h2>Asta Holzer</h2>
    <address><a href="mailto:email@sitio.com">email@sitio.com</a></address>
    <p>Germany</p>
  </article> */

  function createCard(user){
    const card = document.createElement("article")

    card.innerHTML = `
    <img src="${user.foto}" alt="Foto de ${user.nombreCompleto}">
    <h2>${user.nombreCompleto}</h2>
    <address><a href="mailto:${user.email}">${user.email}</a></address>
    <p>${user.pais}</p>
    `

    return (card)
  }


  async function generateRandomUserCards(cantidad){

    const users = await getUsers(cantidad)

    const fragment = document.createDocumentFragment()
    for(const user of users){
     const card = createCard(user)
     fragment.append(card)
    }
    main.append(fragment)

  }

  generateRandomUserCards(6)