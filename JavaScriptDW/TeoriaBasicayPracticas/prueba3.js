// clase 45 bucles while 

var valor = 0;

while (valor < 4){
    // codigo que se ejecuta de forma repetitiva hasta que ya no se cumpla la condicion 
    console.log("Valor es igual a " + valor);  
    console.log("valor es menor que 4, entonces le sumo 1 a la variable valor");
 
    if (valor == 3){
        console.log("ahoravalor es igual a 2 y quiero parar la ejecucion del bucle");
        break;
    }
    valor = valor + 1;
}
