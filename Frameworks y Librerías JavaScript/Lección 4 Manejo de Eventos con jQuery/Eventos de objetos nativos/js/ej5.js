$( document ).ready(function() {


  $("#b1").click(function(){
    $(".azul").after("<div class='circulo amarillo'>Nuevo</div>");
    $(".azul").after($(".rojo"));
    $(".verde").after(function(){
      var elemento = $(".logo").html();
      return elemento;
    })
  });


  $("#b3").click(function(){
    $(".azul").before("<div class='circulo amarillo'>Nuevo</div>");
    $(".azul").before(function(){
      var palabra = " Hola!";
      return $("h4").append(palabra);
    })
  });

  $("#b2").click(function(){
    $("<div class='circulo amarillo'>Nuevo</div>").insertAfter($(".rojo"));
  });

  $("#b4").click(function(){
    $("<div class='circulo amarillo'>Nuevo</div>").insertBefore($(".rojo"));
  });






});
