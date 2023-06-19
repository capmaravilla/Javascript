/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

function generadorClaves(longitud, conMayusculas, conNumeros, conSimbolos) {
	const minusculas = Array.from({ length: 26 }, (_, i) => i + 97);
	const mayusculas = Array.from({ length: 65 }, (_, i) => i + 91);
	const numeros = Array.from({ length: 48 }, (_, i) => i + 58);
	const simbolos = Array.from({ length: 33 }, (_, i) => i + 48);

	let contenedor = minusculas;
	let password = '';

	if (longitud < 8 || longitud > 16) {
		console.log('Longitud no válida');
	} else {
		if (conMayusculas) {
			contenedor += mayusculas;
		}
		if (conNumeros) {
			contenedor += numeros;
		}
		if (conSimbolos) {
			contenedor += simbolos;
		}

		for (let i = 0; i < longitud; i++) {
			password += String.fromCharCode(
				contenedor[Math.floor(Math.random() * contenedor.length)]
			);

			console.log(String.fromCharCode(minusculas));
		}
	}
}

generadorClaves(10, true, false, false);
