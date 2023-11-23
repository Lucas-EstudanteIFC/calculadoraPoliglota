let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.getElementById("btSomar");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value));
});

let btSubtrai = document.getElementById("btSubtrair");
btSubtrai.addEventListener("click", function () {
    subtrair(Number(valor1.value), Number(valor2.value));
});

let btMultiplica = document.getElementById("btMultiplicar");
btMultiplica.addEventListener("click", function () {
    multiplicar(Number(valor1.value), Number(valor2.value));
});

let btDividi = document.getElementById("btDividir");
btDividi.addEventListener("click", function () {
    dividir(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    resultado.textContent = a + b;
};

function subtrair(a, b) {
    resultado.textContent = a - b;
};

function multiplicar(a, b) {
    resultado.textContent = a * b;
};

function dividir(a, b) {
    resultado.textContent = a / b;
};