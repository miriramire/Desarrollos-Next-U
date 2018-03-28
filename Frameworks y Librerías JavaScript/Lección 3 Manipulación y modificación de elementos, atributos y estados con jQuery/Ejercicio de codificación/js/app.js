$( document ).ready(function() {

  //Evento para el botón mas (+)
  $("#mas").click(function(){
    $(".carta:last-child").after("<img src='image/back.jpg' class='carta'/>");
    $(".carta-seleccionada:last-child").after("<img src='image/back.jpg' class='carta'/>");
  });

  //Evento para el botón menos (-)
  $("#menos").click(function(){
    $(".carta:last-child").remove();
    $(".carta-seleccionada:last-child").remove();
  });

  //Evento al hacer click en una carta
  $(document).on("click", "img.carta", function(){
    $(this).attr("src", "image/"+(Math.floor(Math.random() * 52) + 1)+".png");
    var Carta = $(this).attr("src");
    var numCarta1 = Carta.substr(6);
    var numCarta = numCarta1.slice(0, -4);
    $("#contenido-pantalla").html("");
    $("#contenido-pantalla").html("La carta es la <b>"+numCarta+"</b> de la baraja")
  });

  //Evento de hover
  $(document).on({
    //Función al mouse estar sobre la carta
    mouseenter: function(){
      $(this).mouseover(function(){
        //$(this).removeClass("carta");
        $(this).addClass("carta-seleccionada");
        $(this).css("borderStyle", "dotted");
        $(this).css("borderColor", "yellow");
      });
    },

    //Función al mouse dejar la carta
    mouseleave: function(){
      $(this).mouseleave(function(){
        $(this).removeClass("carta-seleccionada");
        //$(this).addClass("carta");
        $(this).css("borderStyle", "");
        $(this).css("borderColor", "");
      });
    }
  }, "img.carta");


});
