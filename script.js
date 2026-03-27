const display = document.getElementById("display");

function add(valor) {
  if (display.value === "0") display.value = "";
  display.value += valor;
}

function limpar() { display.value = "0"; }

function backspace() { 
  display.value = display.value.slice(0,-1);
  if(display.value==="") display.value="0";
}

function calcular() {
  try { display.value = eval(display.value); }
  catch { display.value="Erro"; }
}

function porcentagem() {
  try { display.value = Number(display.value)/100; }
  catch { display.value="Erro"; }
}

window.add = add;
window.limpar = limpar;
window.backspace = backspace;
window.calcular = calcular;
window.porcentagem = porcentagem;

// Ajusta altura real da tela no mobile
function ajustarAltura() {
  const calc = document.querySelector('.calc');
  calc.style.height = `${window.innerHeight}px`;
}

window.addEventListener('load', ajustarAltura);
window.addEventListener('resize', ajustarAltura);
window.addEventListener('orientationchange', ajustarAltura);