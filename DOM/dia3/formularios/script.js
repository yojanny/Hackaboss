"use strict";


const form = document.forms[0]
console.log(form)


const {user, pass, check} = form.elements
/* 
const user = form.elements.user
const pass = form.elements.pass
*/
console.log(user, pass, check)


function handleFormSubmit(e){
  e.preventDefault()
  console.log(user.value);
  console.log(pass.value);

  console.log(check.checked)

  //Limpiar el form
  user.value = "";
  pass.value = "";

  check.checked = false;
}

form.addEventListener("submit", handleFormSubmit)