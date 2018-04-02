$(document).ready(function(){
	alert("La pagina se ha cargado");

	$(window).resize(function(){
		$("h2").html("El ancho de la pagina es: "+$(window).width());
	});

	$(window).scroll(function(){
		$("h4").html("La posicion vertical es: "+$(window).scrollTop())
	});
});