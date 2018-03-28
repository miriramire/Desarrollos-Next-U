$(document).ready(function(){

  $("#b1").click(function(){
    var consulta = $(".bloque").text();
    //window.alert("El texto es: "+consulta);
    $("#resultado").text("El texto es: "+consulta);
    $("h5").text("Este es un <b>nuevo</b> titulo");
  });
  $("#b2").click(function(){
    var consulta = $(".logo").html();
    //$("#resultado").text(consulta);
    $("#resultado").html("Hola <b>que tal?</b>");
  });
  $("#b3").click(function(){
    //$("h2").append("mas texto <span class='rojo'>!!</span>")
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