/**
 * BLOQUE 13 - Alcance (Scope) de las variables
 *
 */

console.log("[GUÍA]: Aquí empezamos con el Scope");
// Scope global
console.log("[GUÍA]: Global Scope");
var varVar = 'A';
const varLet = 'B';
const varConst = 'C';
console.log(varVar, varLet, varConst);


// Function scope
console.log("[GUÍA]: Function Scope");
function alcance() {
    const varVar = 'D';
    const varLet = 'E';
    const varConst = 'F';
    console.log(varVar, varLet, varConst);
}

alcance();
console.log(varVar, varLet, varConst);

// Block Scope
// Cualquier cosa entre {}
console.log("[GUÍA]: Block Scope");
if (1){
    var varVar = 'G';
    const varLet = 'H';
    const varConst = 'I';
    console.log(varVar, varLet, varConst);
}
// La variable varVar se ha modificado: 
console.log(varVar, varLet, varConst);
