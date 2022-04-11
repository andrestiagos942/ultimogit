// JavaScript para numero pares for dumbies

var dato1 = prompt("introduce numero maximo")

var maxnum = parseInt(dato1);

var numero = 0;
var texto = " ";
while (numero < (maxnum + 1)){
    if (numero % 2 == 0){
        // es un numero par
        texto = texto + numero + " ";
    }
    numero = numero + 1;
}

textofinal = "los numeros pares entre 0 y " + maxnum + " son : \n " + texto;

alert(textofinal);
console.log(textofinal);
