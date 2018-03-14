//Variables de operacion

var x=0, //Numero en pantalla
xi=1, //Inicio numero en pantalla
coma = 0, //Coma decimal
ni = 0, //numero oculto
op = "no"; //operacion en curso
contador = 0;


var pantalla = document.getElementById('display');//Pantalla

/*************************************
Mostrar numeros
*************************************/

function numero(xx) { //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) {	// inicializar un número, 
    	if (pantalla.innerHTML.length < 8) {
	        pantalla.innerHTML=xx; //mostrar en pantalla
	        x=xx; //guardar número
	        if (xx==".") { //si escribimos una coma al principio del número
	            pantalla.innerHTML="0."; //escribimos 0.
	            x=xx; //guardar número
	            coma=1; //cambiar estado de la coma
	        }
        }
    }
    else { //continuar escribiendo un número
        if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
        	if (pantalla.innerHTML.length < 8) {
	            pantalla.innerHTML+=xx;
	            x+=xx;
	            coma=1; //cambiar el estado de la coma  
	        }
        }
        //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        else if (xx=="." && coma==1) {} 
        //Resto de casos: escribir un número del 0 al 9: 	 
        else {
        	if (pantalla.innerHTML.length < 8) {
	            pantalla.innerHTML+=xx;
	            x+=xx
	        }
        }
    }
    xi=0 //el número está iniciado y podemos ampliarlo.
}


/*************************************
Operaciones
*************************************/

function operar(s) {
	igualar();
    ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    op=s; //guardamos tipo de operación.
    xi=1; //inicializar pantalla.
}
function raizc() {
    x=Math.sqrt(x) //resolver raíz cuadrada.
    pantalla.innerHTML=x; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}
function opuest() { 
    nx=Number(x); //convertir en número
    nx=-nx; //cambiar de signo
    x=String(nx); //volver a convertir a cadena
    pantalla.innerHTML=x; //mostrar en pantalla.
}
function borradoTotal() {
    pantalla.innerHTML=0; //poner pantalla a 0
    x="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    ni=0 //indicador de número oculto a 0;
    op="no" //borrar operación en curso.
    contador = 0;
}
function igualar() {
    if (op=="no") { //no hay ninguna operación pendiente.
        pantalla.innerHTML=x;	//mostramos el mismo número	
    }
    else { //con operación pendiente resolvemos
        sl=ni+op+x; // escribimos la operación en una cadena
        sol=eval(sl) //convertimos la cadena a código y resolvemos
        pantalla.innerHTML=sol //mostramos la soludión
        x=sol; //guardamos la solución
        op="no"; //ya no hayn operaciones pendientes
        xi=1; //se puede reiniciar la pantalla.
    }
}

//Variables de las teclas
var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");

var on = document.getElementById("on");
var masMenos = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var divi = document.getElementById("dividido");
var por = document.getElementById("por");
var menos = document.getElementById("menos");
var mas = document.getElementById("mas");
var igual = document.getElementById("igual");
var punto = document.getElementById("punto");

/************************************
Presion botones
************************************/
//uno
document.getElementById("1").addEventListener("mousedown", function(){
	uno.setAttribute("style","transform:scale(0.95,0.95)");
	numero("1");
});
document.getElementById("1").addEventListener("mouseout", function(){
	uno.setAttribute("style","transform:scale(1,1)")
});
//dos
document.getElementById("2").addEventListener("mousedown", function(){
	dos.setAttribute("style","transform:scale(0.95,0.95)");
	numero("2");
});
document.getElementById("2").addEventListener("mouseout", function(){
	dos.setAttribute("style","transform:scale(1,1)")
});
//tres
document.getElementById("3").addEventListener("mousedown", function(){
	tres.setAttribute("style","transform:scale(0.95,0.95)");
	numero("3");
});
document.getElementById("3").addEventListener("mouseout", function(){
	tres.setAttribute("style","transform:scale(1,1)")
});
//cuatro
document.getElementById("4").addEventListener("mousedown", function(){
	cuatro.setAttribute("style","transform:scale(0.95,0.95)");
	numero("4");
});
document.getElementById("4").addEventListener("mouseout", function(){
	cuatro.setAttribute("style","transform:scale(1,1)")
});
//Cinco
document.getElementById("5").addEventListener("mousedown", function(){
	cinco.setAttribute("style","transform:scale(0.95,0.95)");
	numero("5");
});
document.getElementById("5").addEventListener("mouseout", function(){
	cinco.setAttribute("style","transform:scale(1,1)")
});
//Seis
document.getElementById("6").addEventListener("mousedown", function(){
	seis.setAttribute("style","transform:scale(0.95,0.95)");
	numero("6");
});
document.getElementById("6").addEventListener("mouseout", function(){
	seis.setAttribute("style","transform:scale(1,1)")
});
//siete
document.getElementById("7").addEventListener("mousedown", function(){
	siete.setAttribute("style","transform:scale(0.95,0.95)");
	numero("7");
});
document.getElementById("7").addEventListener("mouseout", function(){
	siete.setAttribute("style","transform:scale(1,1)")
});
//ocho
document.getElementById("8").addEventListener("mousedown", function(){
	ocho.setAttribute("style","transform:scale(0.95,0.95)");
	numero("8");
});
document.getElementById("8").addEventListener("mouseout", function(){
	ocho.setAttribute("style","transform:scale(1,1)")
});
//nueve
document.getElementById("9").addEventListener("mousedown", function(){
	nueve.setAttribute("style","transform:scale(0.95,0.95)");
	numero("9");
});
document.getElementById("9").addEventListener("mouseout", function(){
	nueve.setAttribute("style","transform:scale(1,1)")
});
//cero
document.getElementById("0").addEventListener("mousedown", function(){
	cero.setAttribute("style","transform:scale(0.95,0.95)");
	numero("0");
});
document.getElementById("0").addEventListener("mouseout", function(){
	cero.setAttribute("style","transform:scale(1,1)")
});


//on
document.getElementById("on").addEventListener("mousedown", function(){
	on.setAttribute("style","transform:scale(0.95,0.95)");
	borradoTotal();
});
document.getElementById("on").addEventListener("mouseout", function(){
	on.setAttribute("style","transform:scale(1,1)")
});
//masMenos
document.getElementById("sign").addEventListener("mousedown", function(){
	masMenos.setAttribute("style","transform:scale(0.95,0.95)");
	opuest();
});
document.getElementById("sign").addEventListener("mouseout", function(){
	masMenos.setAttribute("style","transform:scale(1,1)")
});
//raiz
document.getElementById("raiz").addEventListener("mousedown", function(){
	raiz.setAttribute("style","transform:scale(0.95,0.95)");
	raizc();
});
document.getElementById("raiz").addEventListener("mouseout", function(){
	raiz.setAttribute("style","transform:scale(1,1)")
});
//divi
document.getElementById("dividido").addEventListener("mousedown", function(){
	divi.setAttribute("style","transform:scale(0.95,0.95)");
	operar("/");
});
document.getElementById("dividido").addEventListener("mouseout", function(){
	divi.setAttribute("style","transform:scale(1,1)")
});
//por
document.getElementById("por").addEventListener("mousedown", function(){
	por.setAttribute("style","transform:scale(0.95,0.95)");
	operar("*");
});
document.getElementById("por").addEventListener("mouseout", function(){
	por.setAttribute("style","transform:scale(1,1)")
});
//menos
document.getElementById("menos").addEventListener("mousedown", function(){
	menos.setAttribute("style","transform:scale(0.95,0.95)");
	operar("-");
});
document.getElementById("menos").addEventListener("mouseout", function(){
	menos.setAttribute("style","transform:scale(1,1)")
});
//mas
document.getElementById("mas").addEventListener("mousedown", function(){
	mas.setAttribute("style","transform:scale(0.95,0.95)");
	operar("+");
});
document.getElementById("mas").addEventListener("mouseout", function(){
	mas.setAttribute("style","transform:scale(1,1)")
});
//igual
document.getElementById("igual").addEventListener("mousedown", function(){
	igual.setAttribute("style","transform:scale(0.95,0.95)");
	igualar();
});
document.getElementById("igual").addEventListener("mouseout", function(){
	igual.setAttribute("style","transform:scale(1,1)")
});
//punto
document.getElementById("punto").addEventListener("mousedown", function(){
	punto.setAttribute("style","transform:scale(0.95,0.95)");
	numero(".");
});
document.getElementById("punto").addEventListener("mouseout", function(){
	punto.setAttribute("style","transform:scale(1,1)")
});
