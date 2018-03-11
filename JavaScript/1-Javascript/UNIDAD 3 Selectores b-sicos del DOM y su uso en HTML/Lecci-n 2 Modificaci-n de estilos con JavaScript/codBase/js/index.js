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
