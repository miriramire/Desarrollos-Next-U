$( document ).ready(function() {


  $("#b1").click(function(){
    var consulta = $(".bloque").text();
    $("#resultado").text("El texto es: "+consulta);
    $("h5").text("Este es un <b>nuevo<b> titulo");
  });


  $("#b2").click(function(){
    var consulta = $(".logo").html();
    //$("#resultado").text(consulta); Esta línea se borra en la captura. Mas detalles en el guión pág 4
    $("#resultado").html("Hola <b>qué tal?</b>");
  });

  $("#b3").click(function(){
    //$("h2").append(" mas texto <span class='rojo'>!!</span>"); Esta linea tambien se borra en la captura
    $("h2").append($("h5"));
  });

  $("#b4").click(function(){
    $("h4").prepend("Hey!",$("h5"));
  });



  $("#b5").click(function(){
    $("h5").appendTo($("h2"));
  });
  $("#b6").click(function(){
    $("h5").prependTo($("h4"));
  });









});
