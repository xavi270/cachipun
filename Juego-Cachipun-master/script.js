function monstrarNombre(){
    let nombre = document.querySelector("#nombreUsuario").value;
    document.querySelector("#jugador1Nombre").textContent=nombre;
}

function jugadausuario (jugada){
    const usuario =document.querySelector("#Jusuario")
   if(jugada==1){
      document.querySelector("#Jusuario").src = "img/piedra.png";
   } 
   if(jugada==2){
    document.querySelector("#Jusuario").src = "img/papel.png";
} 
 if(jugada==3){
    document.querySelector("#Jusuario").src= "img/tijera.png";
   }
   let bot = JugadaBot()
   PuntajeJuego(jugada,bot)
}
function JugadaBot(){
let jugada= Math.floor(Math.random()*3)+1
//let bot = document.querySelector("#Jbot").src
if(jugada == 1){
    document.querySelector("#Jbot").src= "img/piedra.png";

}
if(jugada == 2){
    document.querySelector("#Jbot").src= "img/papel.png";

}
if(jugada == 3){
 document.querySelector("#Jbot").src= "img/tijera.png";
}
 return jugada
}

let empates=0
let Jugador1=0
let Jugador2= 0

function PuntajeJuego(u,b){
if((u==1 && b==1)||(u==2 && b==2)||(u==3 && b==3)) {
    empates++;
    document.querySelector("#ptsEmpates").textContent=empates;
}
if((u==1 && b==3)||(u==2 && b==1)||(u==3 && b==2)) {
    Jugador1++;
    document.querySelector("#ptsJugador1").textContent=Jugador1;
}
if((u==1 && b==2)||(u==2 && b==3)||(u==3 && b==1)) {
    Jugador2++;
    document.querySelector("#ptsJugador2").textContent=Jugador2;
}
        
}
function reinicio(){
let empates=0
let Jugador1=0
let Jugador2= 0
document.querySelector("#ptsEmpates").textContent=empates;
document.querySelector("#ptsJugador1").textContent=Jugador1;
document.querySelector("#ptsJugador2").textContent=Jugador2;
document.querySelector("#jugador1Nombre").textContent=usuario;

} 




