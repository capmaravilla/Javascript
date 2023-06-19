const puntaje = ['Love', 15, 30, 40];
let P1 = 0;
let P2 = 0;

const partido = ['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P2', 'P2', 'P2'];
const partido2 = ['P2', 'P2', 'P1', 'P1', 'P2', 'P1', 'P2', 'P1', 'P1', 'P1'];

partido.map((punto) => {
	punto === 'P1' ? P1++ : P2++;
	// Si es P1 le damos un punto a P1 y si no a P2
	if (P1 >= 3 && P1 - P2 > 1) {
		console.log('Gana el jugador 1');
	} else if (P2 >= 3 && P2 - P1 > 1) {
		console.log('Gana el jugador 2');
	} else if (P2 === P1 && P1 >= 3) {
		console.log('Deuce');
	} else if (P1 > P2 && P2 >= 3) {
		console.log('Ventaja del jugador 1');
	} else if (P2 > P1 && P1 >= 3) {
		console.log('Ventaja del jugador 2');
	} else {
		const puntajeP1 = puntaje[P1];
		const puntajeP2 = puntaje[P2];
		console.log(`Jugador 1: ${puntajeP1}, Jugador 2: ${puntajeP2}`);
	}
});
