const display = document.getElementById("display");
let primeiroValor;
let operacao;
let segundoValor;

function aparecerDisplay(input) {
  display.value += input;
}

function apagarDisplay() {
  display.value = "";
}

function operarSoma() {
  primeiroValor = parseInt(display.value);
  operacao = somar;
  display.value = "";
}

function somar(a, b) {
  return a + b;
}

function calcular() {
  segundoValor = parseInt(display.value);
  let total = operacao(primeiroValor, segundoValor)
  display.value = total
}