// Clase 70
// llamado a elemento con jquery
$("h2")
$("p")
$("li")

// cambiar css del elemento 
var titular = $("h1")
titular.css("color","blue");
titular.css("background","red");

// variable que contiene atributos del elemento
var estilo = {
    'color':'white',
    'background':'green',
    'border':'solid 2px blue',
}
// asignandole con titular
titular.css(estilo)

var lista = $('li') ;
//primero de la lista 0
lista.eq(0).css('color','red');
//ultimo de la lista -1
lista.eq(-1).css('color','green');

// Clase 71
titular.text();
titular.text('nuevo query');

// Variable para acceder al formulario
var formulario = $('input');
formulario.eq(0).val('introduce tu nombre');
formulario.eq(0).attr('type','password');

// clase 72 aplicar una clase a un elemento html
var parrafo = $('p')
// agrega la clase
parrafo.addClass('estilo1');
// quita la clase
parrafo.removeClass('estilo1');
// cada vez que invocas cambia add o remove
parrafo.toggleClass('estilo1');