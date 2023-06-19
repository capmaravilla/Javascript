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

//let fn = (e) => e.price > 80;

//console.log(armas.every(fn)); //Evalua todos los elementos que cumplan la función. Devuelve true o false
//console.log(armas.some(fn)); //Que por lo menos uno cumple la condicion
armas.reverse(); // Cambia el orden del array. Es mutable.
console.log(armas);

/* const armasNv2 = armas.map((element) => {
  return {
    name: element.name,
    price: element.price * 2,
  };
}); */

/* console.log(armas);
console.log(armasNv2); */

const sumArm = armas.reduce((acc, curr) => acc + curr.price, 0);
console.log(sumArm);

const fns = [
  () => console.log('Soy el primero'),
  () => console.log('Soy el primero'),
  () => console.log('Soy el primero'),
];

fns.forEach((element) => element());


