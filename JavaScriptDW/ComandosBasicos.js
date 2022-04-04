//----- COMANDOS BASICOS por consola de navegador

// CLASE 41 JS
// Ejemplo 1
var numero = 20
var numero2 = 10
var resultadoej1 = numero + numero2
console.log(resultadoej1)

// Ejemplo 2 

var cadena1 = "hola"
var cadena2 = "jau ar shu ?"
var separador = " "
var resultadoej2= cadena1 + separador + cadena2 
console.log(resultadoej2)
 
// Ejemplo 3 guarda variable

var nombre = prompt("escribi tu nombre")
nombre 


//  CLASE 43 - operadores 
// Comparaciones "true y false"

 1 == 1 true
 1 == 2 false
 1 > 4 False
 1 < 4 true 
 4 >= 4 true
 1 != 1 False   distinto
 1 != 2 true    distinto 


 
 //  CLASE 49 - Arrays arraigadas a v48 y v48 

// Array: estructura donde se pueden almacenar diferentes valores

// array de nombres
 var nombres = ["antonio","Pablo","Maria","Luis"]
    //llamado del nombre por valor de la variable
    nombres [2]
    'Maria'
     nombres [3]
    'Luis'
    //longitud del array
    nombres.length
    // borrar ulitmo valor
    nombres.pop()
    // agregar valor
    nombres.push("juan")
    // variable array matriz
    var matriz = [ [1,2,3], [6,7,8] ]
    // bucle for para var nombre listado en numero
    for (var i = 0; i<nombres.length; i++){
        console.log(nombres[i]);
    }
    // bucle for para var nombre listado por nombres
    for (var i = 0; i<nombres.length; i++){
        console.log(nombres[i]);
    }   
    // bucle for para var nombre listado por nombres
    for (nombre of nombres){
        console.log(nombre);
    }
    // for each con alert
    nombres.forEach(alert)

//  CLASE 50  objetos

// objeto se compone de "valor:propiedad,"

    var objeto = {clave1:"valor1", clave2:123, clave3: "coche"}
    for (clave in objeto)
    console.log(clave)
    console.log(objeto[objeto])

// Metodo de los objetos 
// ejemplo 1 objeto con alert texto

var objeto2 = {
    color:"rojo",
    numero: 35,  
    metodo: function(){
        alert("esta es la funcion del objeto");
    }
}

objeto2.metodo()

// ejemplo 2 objeto con alert concatenando info del objeto

var objeto2 = {
    color:"rojo",
    numero: 35,  
    metodo: function(){
        alert("el color es " + this.color + " y el numero es " + this.numero);
    }
}