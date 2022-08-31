"use strict"

// LEER Y MODIFICAR ELEMENTOS
// TEXTO


const textoP = document.querySelector("#texto")

console.log(textoP)


//Al leer el textContent nos devuelve todo el texto plano (lo que se ve) ignorando las etiquetas
const contenidoTexto = textoP.textContent

console.log(contenidoTexto)


//Al escribir el textContent, lo entenderá como texto plano: si añadimos etiquetas se verán tal cual en el DOM
textoP.textContent = "Este texto se ha modificado con JS <span> span</span>"

console.log(contenidoTexto)


///////////

// HTML

const htmlP = document.querySelector("#html")

//Al leer el innerHTML nos devuelve todo el texto y las etiquetas que tenga dentro el elemento
const contenidoHTML = htmlP.innerHTML

console.log(contenidoHTML)

//AL escribir el innerHTML lo interpreta como HTML y por tanto las etiquetas funcionarán como tal
htmlP.innerHTML = "Este texto se ha modificado con JS <strong> strong </strong>"



//////////
//outerHTML

const outer = document.querySelector("#outer")
console.log(outer)

//Al leer el outerHTML nos devuelve todo el HTML de la etiqueta, incluida la propia etiqueta
console.log(outer.outerHTML)



//Al escribir el outerHTML se modifica TODO el HTML de etiqueta, incluida la propia etiqueta
outer.outerHTML = "<article>Ahora es un article </article>"

console.log(outer)