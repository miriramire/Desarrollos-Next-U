/*Click*/
var tecla = document.getElementsByClassName("tecla");

for (var i = 0; i < tecla.length; i++) {
  tecla[i].addEventListener("click", function() {
  	/*alert("funcion");*/
  	this.style.width = "20%";  	
    /*var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";*/
  });
}
/*
document.getElementById("1").addEventListener("click", function(){
    this.style.width = "20%";
    this.style.transition = "width 1s"
    this.style.width = "22%";
});*/