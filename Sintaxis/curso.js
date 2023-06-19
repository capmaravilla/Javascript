dineropj1 = prompt("cuanto dinero tienes?");
dineropj2 = prompt("cuanto dinero tienes?");
dineropj3 = prompt("cuanto dinero tienes?");

dineropj1 = parseInt(dineropj1);
dineropj2 = parseInt(dineropj2);
dineropj3 = parseInt(dineropj3);

let monto;
monto = dineropj1 + dineropj2 + dineropj3;

if (monto < 1) {
  alert("No tienes dinero");
} else if (monto >= 1 && monto < 2) {
  alert("Compra el helado 1");
} else if (monto >= 2 && monto < 3) {
  alert("Compra el helado 2");
} else if (monto >= 3 && monto < 4) {
  alert("Compra el helado 3");
} else if (monto >= 4 && monto < 5) {
  alert("Compra el helado 4");
} else if (monto >= 5 && monto < 6) {
  alert("Compra el helado 5");
} else if (monto >= 6 && monto < 7) {
  alert("Compra el helado 6");
} else {
  alert("Compra lo que quieras");
}

console.log(monto);
