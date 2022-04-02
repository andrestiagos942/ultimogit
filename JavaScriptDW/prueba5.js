// java script funcionesv47 + ambito de funciones V48

//v48 variable global
var mensaje1 = "pasalo peola breoh";

// de aca para abajo es v47
function hola(nombre, edad) {
    var frase = "hola" + nombre + "que ondinha" + " feliz " + edad + " cumpleañito " + mensaje1;
    return frase;
}
var cadena = hola(" pepe ", 22);
console.log(cadena);
var cadena = hola(" pepito ", 15);
console.log(cadena);