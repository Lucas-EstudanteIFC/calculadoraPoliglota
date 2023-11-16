let idioma = document.getElementByID("idiomas");
let boasVindas = document.getElementById("boas-vindas");

idioma.addEventListener("change", function () {
    if (this.value == "br") {
        btSoma.value = "Somar";
        btSubratrai.value = "Subtrair";
        btMultiplica.value = "Multiplicar";
        btDividi.value = "Dividir";
    }
    else if (this.value == "en") {
        btSoma.value = "Add";
        btSubratrai.value = "Subtract";
        btMultiplica.value = "Multiply";
        btDividi.value = "Divide";
    }
    else if (this.value == "es") {
        btSoma.value = "Agregar";
        btSubratrai.value = "Sustraer";
        btMultiplica.value = "Multiplicar";
        btDividi.value = "Dividir";
    }
})


let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.getElementById("btSomar");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value));
});


let btSubratrai = document.getElementById("btSubtrair");
btSubratrai.addEventListener("click", function () {
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