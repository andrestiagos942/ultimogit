// pagina con descripciones de addeventlistener
// https://developer.mozilla.org/

// Clase 68 eventos 

var parrafo = document.querySelector("#id1");
var titular3 = document.querySelector("#id2");

// añadir eventos a estos elementos id1 e id2 color 

parrafo.addEventListener("mouseover", function(){
    parrafo.style.color = "green";
    parrafo.style.border = "solid 2px green";
})

parrafo.addEventListener("mouseout", function(){
    parrafo.style.color = "black";
    parrafo.style.border = "solid 2px red";
})

titular3.addEventListener("click", function(){
    titular3.textContent = "gracoas por clickear";
    titular3.style.color = "red";
})

titular3.addEventListener("click", function(){
    titular3.textContent = "gracoas por clickear2";
    titular3.style.color = "green";
})