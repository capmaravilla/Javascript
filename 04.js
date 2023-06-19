/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo,
 * fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

function numPPF(numero) {
  let resPar;
  let resPri;
  let resFib;

  //Comprobamos si es un numero par o impar
  numero % 2 == 0
    ? (resPar = 'es un numero par')
    : (resPar = 'es un numero impar');

  // comprobamos si es un numero primo
  if (numero <= 1) {
    resPri = 'no es número primo';
  } else {
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i == 0) {
        resPri = 'no es un número primo';
      } else {
        resPri = 'es un número primo';
      }
    }
  }

  //Comprobamos si esta en la secuencia de Fibonacci
  let sqrt1 = Math.sqrt(5 * Math.pow(numero, 2) - 4);
  let sqrt2 = Math.sqrt(5 * Math.pow(numero, 2) + 4);

  if (numero < 0) {
    resFib = 'no está en la secuencia de Fibonacci';
  } else if (numero === 0 || numero === 1) {
    resFib = 'está en la secuencia de Fibonacci';
  } else if (Number.isInteger(sqrt1) || Number.isInteger(sqrt2)) {
    resFib = 'está en la secuencia de Fibonacci';
  } else {
    resFib = 'no está en la secuencia de Fibonacci';
  }

  // Return the results
  console.log(
    'El numero ' + numero + ' ' + resFib + ', ' + resPar + ' y ' + resPri
  );
}
numPPF(73);