let numbers = [1, 2, 3, 4, 5];

function showValue(array) {
  console.log(array.length);
  console.log(array[0]);
  console.log(array[array.length - 1]);
  // Como el length es 5 pero la ultima posición es 4 ponemos -1
  console.log(array.at(0)); //Acceder a la posición 0
  console.log(array.at(-1)); //Me da el ultimo elemento
}

function show(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function showInv(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

let nombres = ['Pedro', 'Ana', 'David'];

function showDom(element, array) {
  document.getElementById(element).innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    document.getElementById(element).innerHTML += `<div>${array[i]}<div>`;
  }
}
//showDom('array1',nombres);
let defensas = ['escudo', 'casco', 'armadura'];
const armas = ['espada', 'lanza', 'arco'];

/*
 * metodos mutables, modifican el estado
 */
armas.push('maza'); //Agrega un elemento al final
armas.unshift('daga'); //Agrega un elemento al inicio
armas.splice(1, 0, 'katana'); //posicion, borrar a la derecha, elemento nuevo
let b = armas.pop(); //Elimna y retorna el ultimo elemento
let c = armas.shift(); //Elimna y retorna el primer elemento

/*
 * metodos inmutables
 */
const equipamiento = defensas.concat(armas); //Concadeno dos arrais
//Con const no la puedo cambiar el array pero si sus elementos
armas.indexOf('katana'); //me devuelve el indice de un elemento,-1 si no hay
const armas2 = armas.slice(0, -1); //Coje una porcion de un array para crear otro
armas.fill(
  'puños',
  0,
  armas.length
); // Rellena con un elemento, solo los elementos que existen
//!Curioso que no hay que poner el length -1 (Porque solo piden cuantos no posiciones)

//showDom('array1', armas);

const numeros = [1, 2, 3, 4];

function sumaNumeros(a, b, c, d) {
  return a + b + c + d;
}

sumaNumeros(1, 2, 3, 4); //Sin array
sumaNumeros(numeros[0], numeros[1], numeros[2], numeros[3]); //con array en bruto
sumaNumeros(...numeros); //Con array y operador spread. Si el array tiene mas parametros solo cojeria el numero que le marca la funcion

const dosArraysSpread = [...numeros, ...defensas];
const dosArrays = defensas.concat(numeros);

//Ademas en el array de spread puedo añadir mas elementos
const dosArraysSpread2 = [...numeros, 'a', 'b', ...defensas];

const copiaArmas = [...armas]; // Esto seria una copia de un array
const copiaArmas2 = armas; //!Esto no es una copia, es una referencia 

 