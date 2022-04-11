// codigo javascript para la funcion media 

function media (numeros){
// sumamos los numeros del array de numeros pasados como parametros
    var total = 0;
    for (numero of numeros) {
        total = total + numero;
  }

var longitud = numeros.length;
var media = total / longitud;
return media;

}

var numeros = [1,4,5,6,3,2];
var resultado = media(numeros);

var texto = "el resultado es igual a " + resultado;
console.log(texto);
alert(texto);