"use strict";

//Crea un formulario con dos campos: usuario y contraseña
//Haz que al enviar el formulario, la información se guarde en el localStorage

const form = document.forms[0]

const {user, pass} = form.elements

console.log(form, user, pass)

function save(e){
  e.preventDefault()
  localStorage.setItem("user", user.value)
  localStorage.setItem("pass", pass.value)

  user.value = ""
  pass.value = ""
}


form.addEventListener("submit", save)