$(function(){


  $(".card").click(function(){
    if ($(this).attr("class")=="card shadow" || $(this).find("p.checked").attr("class")=="checked") { //Or cuando se haga ele evento dblclick
      $(this).removeClass("shadow");
    }else {
      $(".card").removeClass("shadow");
      $(this).addClass("shadow");
    }
  });


  $(document).keydown(function(event){
    if (event.keyCode==32) {
      event.preventDefault();
      $(".card").addClass("zoomOut");
      $(".card-image img").removeClass("alturaNormal");
      $(".card-image img").addClass("alturaZoom");
      $(".card-image .checked i").removeClass("large");
    }
  });
  $(document).keyup(function(event){
    if (event.keyCode==32) {
      $(".card").removeClass("zoomOut");
      $(".card-image img").removeClass("alturaZoom");
      $(".card-image img").addClass("alturaNormal");
      $(".card-image .checked i").addClass("large");
    }
  });

  $(document).keypress(function(event){
    if (event.keyCode==116) {
      console.log("t");
      $(".card").addClass("shadow");
    }
    if (event.keyCode==110) {
      console.log("n");
      $(".card").removeClass("shadow");
    }
  });


  $(".card").contextmenu(function(event){
    event.preventDefault();
    alert("No puedes descargar las fotos sin antes loguearte")
  });


  $(".card").dblclick(function(){
    $(this).find("img").toggleClass("imagenSeleccionada");
    $(this).find("p.checked").toggleClass("oculto");
    $(this).find("img").removeClass("imagenOpaca");
    $(this).find("p.descripcion, span").addClass("oculto");
    $(this).removeClass("shadow");
  });



  $(".card").hover(function(){
    if ($(this).find("p.checked").attr("class")!="checked") {
      $(this).find("img").toggleClass("imagenOpaca");
      $(this).find("p.descripcion, span").toggleClass("oculto");
    }
  });

  $(".card").mouseleave(function(){
    $(this).find("img").removeClass("imagenOpaca");
    $(this).find("p.descripcion, span").addClass("oculto");
  });

  $(document).mousemove(function(event){
    $("#posX").text(event.pageX);
    $("#posY").text(event.pageY);
  });

    $(".bloque").mousedown(function(){
      $(this).removeClass("teal");
      $(this).css("background", "#42a5f5");
    });

  $(".bloque").mouseup(function(event){
    $(this).addClass("teal");
  });
})
