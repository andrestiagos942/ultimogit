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
//formulario.eq(0).val('introduce tu nombre');
//formulario.eq(0).attr('type','password');

// clase 72 aplicar una clase a un elemento html
var parrafo = $('p')
// agrega la clase
parrafo.addClass('estilo1');
// quita la clase
parrafo.removeClass('estilo1');
// cada vez que invocas cambia add o remove
parrafo.toggleClass('estilo1');

// video 73 eventos del mouse

$('h1').click(function(){
    console.log('tocaste el titulo');
})

$('li').click(function(){
    console.log('tocaste lista');
})

$('p').dblclick(function(){
    console.log('tocaste doble p');
})

// clase 74 eventos sobre teclado

// al tocar tecla cambia a rojo el input
//$('input').eq(0).keypress(function(){
//    $(this).css('color','red')
//})
// esto de abajo cambia a rojo y loguea teclas, y cambia de color a traves de teclas por ascii
$('input').eq(0).keypress(function(){
    console.log(event)
    if (event.which == 100){
       $(this).css('color','red')
    }
    if (event.which == 101){
        $(this).css('color','green')
     }
})

// clase 75 animaciones 
$('li').eq(0).click(function(){
    $('#id1').fadeOut(2000)
})

$('input').eq(0).click(function(){
    $('#id1').fadeIn(2000)
})

$('p').eq(0).click(function(){
    $('#id1').slideUp(2000)
})

$('h1').eq(0).click(function(){
    $('#id1').slideDown(2000)
})
