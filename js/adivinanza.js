let intentos = 0;

let boton = document.getElementById("boton");

boton.onclick = function(){
    intentos<4?intentos++:intentos=0;
}