window.onload = function () {
  const display = document.getElementById("display");

  function add(valor) {
    display.value += valor;
  }

  function limpar() {
    display.value = "";
  }

  function backspace() {
    display.value = display.value.slice(0, -1);
  }

  function calcular() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Erro";
    }
  }

  function porcentagem() {
    try {
      display.value = Number(display.value) / 100;
    } catch {
      display.value = "Erro";
    }
  }

  window.add = add;
  window.limpar = limpar;
  window.backspace = backspace;
  window.calcular = calcular;
  window.porcentagem = porcentagem;
};