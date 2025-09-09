function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function producto(a, b) {
  return a * b;
}

function cociente(a, b) {
  if (b === 0) {
    return "Error: división por cero";
  }
  return a / b;
}

function potencia(a, b) {
  return Math.pow(a, b);
}

function mostrarResultado(operacion) {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      let res = operacion(n1, n2);
      document.getElementById("resultado").value = res;
    }