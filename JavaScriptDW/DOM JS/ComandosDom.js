// Clase 65
// selector de elementos ejemplo h1, ahora variable titular es el h1
var titular = document.querySelector("h1") 

// cambiarle color a la variable titular 
titular.style.color = "green"
// mismo ejemplo que arriba 
var parrafo = document.querySelector("p")
parrafo.style = "red"
parrafo.style.fontSize = "14px"



// Clase 66
// Editar texto en parrafo 
parrafo.textContent = "esto es un texto nuevo para este parrafo";
'esto es un texto nuevo para este parrafo'
// Editar Html en un parrafo
parrafo.innerHTML = "esto es un parrafo con algo en <b>negrita<b>";