"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let acudit;
;
const reportAcudits = [];
const mostrarBotons = () => setTimeout(() => document.querySelectorAll("[puntuacio]").forEach((boto) => {
    const elementBoto = boto;
    elementBoto.style.display = "block";
}), 300);
const amagarBotons = () => setTimeout(() => document.querySelectorAll("[puntuacio]").forEach((boto) => {
    const elementBoto = boto;
    elementBoto.style.display = "none";
}), 400);
const rebreAcudit = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resposta = yield fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        });
        const dades = yield resposta.json();
        acudit = dades.joke;
        console.log("Acudit:", acudit);
    }
    catch (err) {
        console.log(err.message);
    }
    const textAcudit = document.querySelector("#text-acudit");
    textAcudit.innerHTML = `" ${acudit} "`;
    mostrarBotons();
});
const rebreAcudit2 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resposta = yield fetch("https://api.chucknorris.io/jokes/random");
        const dades = yield resposta.json();
        acudit = dades.value;
        console.log("Acudit2:", acudit);
    }
    catch (err) {
        console.log(err.message);
    }
    const textAcudit = document.querySelector("#text-acudit");
    textAcudit.innerHTML = `" ${acudit} "`;
    mostrarBotons();
});
const triaApi = () => {
    const botoAcudit = document.querySelector(".boto-acudit");
    botoAcudit.innerText = "Següent acudit";
    const random = Math.trunc(Math.random() * 10);
    console.log("Random:", random);
    if (random < 5)
        rebreAcudit();
    else
        rebreAcudit2();
    canviForma(random);
};
function puntuacio(score) {
    let report = {
        joke: acudit,
        score: score,
        date: new Date().toISOString(),
    };
    reportAcudits.push(report);
    console.table(reportAcudits);
    amagarBotons();
}
const rebreInfoMeteo = () => __awaiter(void 0, void 0, void 0, function* () {
    let imgMeteo, tempMeteo;
    try {
        const apiLatLon = "lat=41.3888&lon=2.159";
        const apiKey = "cf6b3b08d8458fe12e0dddab0b644c2a";
        const apiLang = "CA";
        const apiUnit = "metric";
        const resposta = yield fetch(`https://api.openweathermap.org/data/2.5/weather?${apiLatLon}&appid=${apiKey}&lang=${apiLang}&units=${apiUnit}`);
        const dades = yield resposta.json();
        tempMeteo = dades.main.temp.toFixed(1);
        imgMeteo = dades.weather[0].icon;
    }
    catch (err) {
        console.log(err.message);
    }
    const textMeteo = document.querySelector("#text-meteo");
    textMeteo.innerHTML = tempMeteo;
    const imgMeteor = document.querySelector(".img-meteo");
    imgMeteor.src = `http://openweathermap.org/img/w/${imgMeteo}.png`;
});
rebreInfoMeteo();
const canviForma = (random) => {
    const formaGran = document.querySelector(".forma-gran");
    formaGran.style.backgroundImage = `url(./assets/svg/blob-${random}.svg`;
    let random2 = random + 1;
    if (random2 == 10)
        random2 = 0;
    const formaPetitaDalt = document.querySelector(".forma-petita-dalt");
    formaPetitaDalt.style.backgroundImage = `url(./assets/svg/blob-${random2}.svg`;
    let random3 = random + 2;
    if (random3 == 10 || random3 == 11)
        random3 = 0;
    const formaPetitaBaix = document.querySelector(".forma-petita-baix");
    formaPetitaBaix.style.backgroundImage = `url(./assets/svg/blob-${random3}.svg`;
};
