const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "idiomas/english.js";
document.head.appendChild(linguaInglesa);

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

const linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "idiomas/francais.js)";
document.head.appendChild(linguaFrancesa);

let idioma = document.querySelector("#idiomas");
let boasVindas = document.getElementById("boas-vindas");
let titulo = document.getElementById("title");

idioma.addEventListener("change", function () {
    translate(this.value);
});

function translate(idioma) {
    let traducao =
        (idioma == "br") ? portugues()
        : (idioma == "en") ? english() 
        : (idioma == "fr") ? francais() 
        : (idioma == "es") ? espanol()
        : null;
    setLanguage(traducao);
}

function setLanguage(traducao) {
    btSoma.value = traducao.soma;
    btSubtrai.value = traducao.subtracao;
    btMultiplica.value = traducao.multiplicacao;
    btDividi.value = traducao.divisao;
    titulo.innerHTML = traducao.titulo;
    boasVindas.innerHTML = traducao.boasVindas;
}