
$( document ).ready(function() {

  $("#s1").click(function(){
    var ruta = $(this).attr("src");
    window.alert("La ruta de la imágen es: "+ ruta);
  });


  $("#logo").click(function(){
    $("#s2").attr("src","image/s2.jpg");
    $("#s2").attr("width","50%");
    $("#s3").attr("src","image/s3.png");
    $("#s3").attr("width","70%");

    for (var i = 1; i < 4; i++) {
      var seleccion = "form div:nth-of-type("+i+") input";
      $(seleccion).attr("id", function(){
        return "input"+i;
      });
    };

    $("#l1").attr({
      href: "http://www.google.com",
      target: "_blank"
    });

    $("input").removeAttr("placeholder");

  });

  $("input").click(function(){
    var id = $(this).attr("id");
    window.alert("El id del elemento es es: "+ id);
  });


});
