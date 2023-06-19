let jugador1 = 0;
let jugador2 = 0;

function reiniciar() {
  jugador1 = 0;
  jugador2 = 0;
}

function anotarPunto(jugador) {
  if (jugador === 1) {
    jugador1++;
  } else if (jugador === 2) {
    jugador2++;
  }
  imprimirPuntuacion(jugador1, jugador2);
}

function imprimirPuntuacion(jugador1, jugador2) {
  const scores = ['Love', 15, 30, 40];

  if (jugador1 >= 3 && jugador1 - jugador2 > 1) {
    console.log('¡El jugador 1 ha ganado!');
    reiniciar();
  } else if (jugador2 >= 3 && jugador2 - jugador1 > 1) {
    console.log('¡El jugador 2 ha ganado!');
    reiniciar();
  } else if (jugador2 === jugador1 && jugador1 >= 3) {
    console.log('Deuce');
    // Se ve que si el marco una posicion que se sale del array no funciona.
  } else if (jugador1 > jugador2 && jugador2 >= 3) {
    console.log('Ventaja para el jugador 1');
  } else if (jugador2 > jugador1 && jugador1 >= 3) {
    console.log('Ventaja para el jugador 2');
  } else {
    const puntuacionJugador1 = scores[jugador1] || 'Ventaja P1';
    const puntuacionJugador2 = scores[jugador2] || 'Ventaja P2';
    console.log(
      `Jugador 1: ${puntuacionJugador1}, Jugador 2: ${puntuacionJugador2}`
    );
  }
}

const partidoEjercicio = [1, 1, 2, 2, 1, 2, 1, 2, 2, 2];

function partido(puntuacion) {
  for (let i = 0; i < puntuacion.length; i++) {
    const element = puntuacion[i];
    anotarPunto(element);
  }
}

partido(partidoEjercicio);
