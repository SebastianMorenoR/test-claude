// Esta línea intenta mostrar en consola el valor de una variable llamada 'nombreQueNoExiste'.
// Sin embargo, esta variable no ha sido declarada ni definida previamente en el código.
// Por eso, al ejecutar esta línea se produce un error de referencia (ReferenceError),
// indicando que 'nombreQueNoExiste' no está definida.
console.log(nombreQueNoExiste)

function mayorDeDos(a, b) {
  return a > b ? a : b;
}

function menorDedos(a, b) {
  return a < b ? a : b;
}

console.log(mayorDeDos(3, 7))