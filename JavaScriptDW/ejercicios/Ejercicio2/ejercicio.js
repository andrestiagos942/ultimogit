// JavaScript para numero pares for dumbies

var dato1 = prompt("introduce numero maximo")

var maxnum = parseInt(dato1);

var numero = 0;
var texto = " ";
// maxnum se le suma uno, para que incluya el ingresado por usuario
while (numero < (maxnum + 1)){
    // es un numero par
    if (numero % 2 == 0){
        
        texto = texto + numero + " ";
    }
    numero = numero + 1;
}

textofinal = "los numeros pares entre 0 y " + maxnum + " son : \n " + texto;

alert(textofinal);
console.log(textofinal);
