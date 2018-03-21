$( document ).ready(function() {
  $("body").click(function(){
    //Realiza las selecciones en este bloque de código
    $("div:has(h1)").find(":contains('We love to tell your story')").css("color", "yellow");
    $("div:has(a)").find(":contains('See Portfolio')").css("color", "yellow");
    $("li:has(a)").find(":contains('Home')").css("color", "yellow");
    $("#fh5co-main-nav").find(":contains('Home')").css("color","yellow");
    $("img[src$='2.jpg']+a").find(":contains('15 images')").css("color","yellow");
    $("div[data-section='about'] div:nth-child(2)").find("h2:contains('Jean Smith') ~ p").css("color","yellow");
    $("#fh5co-contact div.section-heading p:last-of-type a").css("color","yellow");
    $("ul.slides cite").css("color","yellow");
    $(".fh5co-footer-widget p:nth-of-type(2):not(a)").css("color","yellow");
  });
});
