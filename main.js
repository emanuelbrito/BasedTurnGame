
let vidaJugadorA = 10;
let vidaJugadorB = 10;

let ataqueJugadorA = Math.floor(Math.random() * (6 - 1)) + 1;
let ataqueJugadorB = Math.floor(Math.random() * (5 - 2)) + 2;

let turno = 1;

let finDelJuego = false;

console.log("comienza el juego");

while (finDelJuego === false) {
    /* el juego esta corriendo */

    if (vidaJugadorA > 0 && vidaJugadorB > 0) {
        /* ambos siguen vivos*/
         ataqueJugadorA = Math.floor(Math.random() * (6 - 1)) + 1;
         ataqueJugadorB = Math.floor(Math.random() * (5 - 2)) + 2;

        if (turno === 1){
            /*el jugador A ataca*/
            vidaJugadorB = vidaJugadorB - ataqueJugadorA;
            turno = 0;
            console.log("jugador A hizo " + ataqueJugadorA + " puntos de daño");
        }      else{
            /* ataca el jugador b*/

            vidaJugadorA = vidaJugadorA - ataqueJugadorB;
            turno = 1;
            console.log("jugador B hizo " + ataqueJugadorB + " puntos de daño" )
        }
    } else{
        /* logica */
        if (vidaJugadorA < 0 && vidaJugadorB > 0) {
            /*gana jugador B*/
            console.log("Gana jugador B");  
        } else if ( vidaJugadorB < 0 && vidaJugadorA > 0){
          /*gana jugador A */
          console.log("Gana jugador A.");
        } else{
            /* Empate*/
            console.log("no gana nadie");
        }
        finDelJuego = true;
    } 
}
