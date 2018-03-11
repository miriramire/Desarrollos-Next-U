var Eventos = {
  init: function(){
    document.onkeypress = this.eventoSonido;
    this.asignarEventosBotones('boton-accion');
    this.asignarEventosBotones('boton-next');
    this.asignarEventoMostrar();
    document.getElementById('increase-font').onclick = aumentarTamañoLetra;
    document.getElementById('decrease-font').onclick = reducirTamañoLetra;
    document.querySelector('.boton-check img').onclick = this.eventoSaludo;
  },
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmouseover = this.eventoColorBotones;
      botonesPagina[i].onmouseleave = this.eventoRetornarColorBotones;
    }
  },
  eventoColorBotones: function(event){
    cambiarColorBotonesAccion(event.target);
  },
  eventoRetornarColorBotones: function(event){
    retornarColorBotonesAccion(event.target);
  },
  eventoMostrarContenido: function(event){
    mostrarContenido(event.target);
  },
  asignarEventoMostrar: function(){
    var bloques = document.querySelectorAll("[class^='item-']");
    for (var i = 0; i < bloques.length; i++) {
      bloques[i].onclick = this.eventoMostrarContenido;
      bloques[i].ondblclick = this.eventoAddTexto;
    }
  },
  eventoSonido: function(event){
    if (event.which==48) {
      desactivarVolumen();
    }else if (event.which==57) {
      activarVolumen();
    }
  },
  eventoSaludo: function(){
    saludoInicial();
    document.getElementById('myModal').style.display = "none";
  },
  eventoAddTexto: function(event){
    addContenido(event.target);
  }

}

Eventos.init();