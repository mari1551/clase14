// $("selector").accion
// ejemplo: $("h1").hide();

$(document).ready(function(){
//$(function(){});

//$("p").css({"background-color":"blue"});

//$("#icono1").css({"background-color":"red"});

//$(".xxx").css({"background-color":"red"});

// $("button").click(function(){
//     alert("has hecho click");
// });

// $("button").click(function(){
//      $("#icono1").hide();
// });

// $("#JS").mouseenter(function(){
//     $(this).hide();
// });

// $("#JS").mouseleave(function(){
//     $(this).show();
// });

// $("#JS").mouseenter(function(){
//      $(this).fadeOut();
// });

// $("#JS").mouseleave(function(){
//     $(this).fadeIn();
// });

// $("#JS").mouseenter(function(){
//     $(this).slideDown();
// });

// $("#JS").mouseleave(function(){
//    $(this).slideUp();
// });

// $("#btn-mostrar").click(function(){
//     alert($("#JS").text());
// });

// $("#btn-mostrar").click(function(){
//     alert($("#JS").html());
// });

// $("#btn-mostrar").click(function(){
//     alert($("#JS").attr("id"));
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").text("Cambiando el texto");
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").text("Cambiando el texto");
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").html("Hola <strong>Mundo</strong>");
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").append("Hola <strong>Mundo</strong>");
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").prepend("Hola <strong>Mundo</strong>");
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").after("<p>Hola <strong>Mundo</strong></p>");
//     //$("#JS").before("<p>Hola <strong>Mundo</strong></p>");
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").before("<p>Hola <strong>Mundo</strong></p>");
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").remove();
// });

// $("#btn-mostrar").click(function(){
//     $("#JS").empty();
// });

// $("#btn-mostrar").click(function(){
//     $("h1").addClass("alineacioncentrada");
// });

// $("#btn-mostrar").click(function(){
//     $("h1").removeClass("alineacioncentrada");
// });


$("a").click(function(event){
    event.preventDefault();
    $(this).hide();
});

$("#btn-mostrar").click(function(){
    $("a").show();
});

$("#btn-cambiar").click(function(){
    $("#DivLista").html("Este es un nuevo texto generado al presionar el boton cambiar y con Jquery");
});

$("li").addClass("item");

$("#btn-toggle").click(function(){
    $("#DivJquery").toggleClass("rosa");
});







}); //fin de documento listo