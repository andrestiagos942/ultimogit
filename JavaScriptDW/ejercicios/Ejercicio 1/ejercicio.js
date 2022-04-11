// JavaScript calculadora for dumbies

var dato1 = prompt("introduce primer numero")
var dato2 = prompt("introduce el segundo numero ")
var operacion = prompt("introduce la operacion a realizar")

var numero1 = parseInt(dato1);
var numero2 = parseInt(dato2);

var resultado = null;
var texto = null;

if (operacion == "+"){
    //se realiza la op de suma numero 1 y 2
    resultado = numero1 + numero2;
    texto = "la suma de " + numero1 + " y " + numero2 + "es igual a " + resultado;
    } 
    
    else if (operacion == "-"){
    //se realiza la op de la resta de  numero 1 y 2
    resultado = numero1 - numero2;
    texto = "la resta de " + numero1 + " y " + numero2 + " es igual a " + resultado;
    } else if (operacion == "*"){
        //se realiza la op de la multplic de  numero 1 y 2
        resultado = numero1 * numero2;
        texto = "la multplic de " + numero1 + " y " + numero2 + " es igual a " + resultado;
    } else if (operacion == "/"){
        //se realiza la op de la division de numero 1 y 2
        resultado = numero1 / numero2;
        texto = "la division de " + numero1 + " y " + numero2 + " es igual a " + resultado;
    } else {
        texto = "Volve a la cancha bobo";
    }

    alert(texto)
    console.log(texto);



