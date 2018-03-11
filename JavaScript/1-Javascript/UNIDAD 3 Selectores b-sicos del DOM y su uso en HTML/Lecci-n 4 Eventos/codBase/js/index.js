function cambiarColorBotonesAccion(elemento){
  elemento.style.background = "#4d62d0";
  elemento.children[0].style.background = "inherit";
}

function retornarColorBotonesAccion(elemento){
  elemento.style.background = "#149c5f";
  elemento.children[0].style.background = "inherit";
}


function mostrarContenido(elemento){
  for (var i = 0; i < document.querySelectorAll("[class^='item-']").length; i++) {
    document.querySelectorAll("[class^='item-']")[i].style.width = "4%";
    document.querySelectorAll("[class^='item-']")[i].style.background = "#4d62d0";
  }
  for (var i = 0; i < document.querySelectorAll("[class^='item-'] *").length; i++) {
    document.querySelectorAll("[class^='item-'] *")[i].style.display = "none";
  }
  elemento.style.width = "96%";
  elemento.style.background = "#fff";
  for (var i = 0; i < elemento.children.length; i++) {
    elemento.children[i].style.display = "block";
  }
}


function reducirTamañoBotonAccion(elemento){
  elemento.style.width = "18%";
}
function aumentarTamañoBotonAccion(elemento){
  elemento.style.width = "20%";
}
function reducirTamañoLetra(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "small";
}
function aumentarTamañoLetra(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "xx-large";
}

/*---------------------------------Parte Tres--------------------------*/

function desactivaSonido(){
  document.getElementById('speaker-radio').checked = false;
  document.querySelector(".audio img").setAttribute("src","img/mute.png");
}

function activarSonido(){
  document.getElementById('speaker-radio').checked = true;
  document.querySelector(".audio img").setAttribute("src","img/speaker.png");
}

function adicionContendor(){
  var nombre = document.getElementsByName("nombre")[0].value;
  var nuevo_Saludo = document.createElement("h2");
  var contenido_Saludo = document.createTextNode("Bienvenido "+nombre);
  nuevo_Saludo.appendChild(contenido_Saludo);
  document.getElementsByClassName('container-saludo')[0].appendChild(nuevo_Saludo);
}

function addContenido(elemento){
  var nuevoTexto = document.createElement("p");
  var contenidoParrafo = document.createTextNode("Mi primer intento");
  nuevoTexto.appendChild(contenidoParrafo);
  elemento.appendChild(nuevoTexto);
}

function modificarTitulo(element, texto){
  element.innerHTML=texto;
}