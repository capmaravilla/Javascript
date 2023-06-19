/*
 *Array de objetos
 */
const armas = [
  {
    name: 'Espada',
    price: 100,
    status: 5,
  },
  {
    name: 'Lanza',
    price: 80,
    status: 3,
  },
  {
    name: 'Palanca',
    price: 60,
    status: 7,
  },
  {
    name: 'Arco',
    price: 120,
    status: 8,
  },
];

function showDom(element, array) {
  document.getElementById(element).innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    document.getElementById(
      element
    ).innerHTML += `<div>- ${array[i].name} - ${array[i].price} - ${array[i].status}<div>`;
  }
}
//Ponemos los respectivos atributos del objeto
//showDom('array1', armas);

// una variable que contiene una funcion.
let fn = function () {
  console.log('Hello');
};

//fn(); //Ejecutamos la funcion a traves de la variable. FUNCION DE PRIMER ORDEN.

function superiorF(f) {
  //Esto es una FUNCION DE ORDEN SUPERIOR .Recibe funciones
  //            FUNCION DE PRIMER ORDEN. La que se manda
  console.log('antes');
  f();
  console.log('despues');
}

//superiorF(fn); funcion dentro de otra funcion

// FUNCION FLECHA
let fn01 = function () {
  //Funcion normal
  console.log('Hello');
};
let fn02 = () => console.log('Hello'); //Funcion flecha. Con una linea no necesita llaves
let fn03 = () => {
  console.log('Hello');
  console.log('Hello2');
};

let fn04 = (name) => console.log('Hello ' + name); //Con un parametro tampoco necesita los parentesis
let fn05 = (name, codigo) => console.log('Hello ' + name + codigo);

//fn05('David', 56);

function showDom2(element, array) {
  document.getElementById(element).innerHTML = '';
  for (let e of array) {
    //Una forma del for
    document.getElementById(
      element
    ).innerHTML += `<div>- ${e.name} - ${e.price} - ${e.status}<div>`;
    //cambio aqui tambien
  }
}

//armas.forEach((elemento)=>console.log(elemento));

/* function print(elemento) {
    console.log(elemento)
    console.log('Hola')
}

armas.forEach(print); 

armas.forEach((elemento, i) => {
  console.log(elemento);
  console.log('Indice ' + i);
}); */
const lista = [3, 4, 1, 6, 3, 5];
//console.log(lista);

lista.sort(); //Para ordenar
//console.log(lista);

armas.sort((a, b) => a.price - b.price);

armas.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

const arma = armas.find((element) => element.price < 100); //solo me regresa el primero que encuentra
const arma2 = armas.filter((element) => element.price < 100); //me trae todos los que cumplan la condicion

