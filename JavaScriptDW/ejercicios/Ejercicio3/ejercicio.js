function media(numero1, numero2, numero3){
    //esta funcion calcula la media de 3 numeros
    var resultado = (numero1 + numero2 + numero3) / 3;
    return resultado;
}

//vamos a utilizar la funcion y le agregue validacion de campos para que solo sea numero

var dato1 = prompt("introduce numero maximo")
while (dato1 == null || /\D/.test(dato1) || dato1 == "") {
    dato1 = prompt("SOLO NUMEROS BOBI: ");
};
var num1 = parseInt(dato1);
console.log("num1 " + num1);
var dato2 = prompt("introduce numero maximo")
while (dato2 == null || /\D/.test(dato2) || dato2 == "") {
    dato2 = prompt("SOLO NUMEROS BOBI: ");
};
var num2 = parseInt(dato2);
console.log("num2 " + num2);
var dato3 = prompt("introduce numero maximo")
while (dato3 == null || /\D/.test(dato3) || dato3 == "") {
    dato3 = prompt("SOLO NUMEROS BOBI: ");
};
var num3 = parseInt(dato3);
console.log("num3 " + num3);

var valor = media(num1, num2, num3);
var texto = "el resultado de la media es " + valor;
console.log(texto);

