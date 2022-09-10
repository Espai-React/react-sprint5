let acudit;
const reportAcudits = [];

const mostrarBotons = () => setTimeout(() => document.querySelectorAll("[puntuacio]").forEach((boto) => (boto.style.display = "block")), 300);
const amagarBotons = () => setTimeout(() => document.querySelectorAll("[puntuacio]").forEach((boto) => (boto.style.display = "none")), 400);

const triaApi = () => {
  const random = Math.random();
  console.log("Random:", random);
  if (random < 0.5) rebreAcudit();
  else rebreAcudit2();
};

const rebreAcudit = async () => {
  try {
    const resposta = await fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" }});
    const dades = await resposta.json();
    acudit = dades.joke;
    console.log("Acudit:", acudit);
  } catch (err) {
    console.log(err.message);
  }
  document.querySelector("#text-acudit").innerHTML = `" ${acudit} "`;
  mostrarBotons();
};

const rebreAcudit2 = async () => {
  try {
    const resposta = await fetch("https://api.chucknorris.io/jokes/random");
    const dades = await resposta.json();
    acudit = dades.value;
    console.log("Acudit2:", acudit);
  } catch (err) {
    console.log(err.message);
  }
  document.querySelector("#text-acudit").innerHTML = `" ${acudit} "`;
  mostrarBotons();
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

const rebreInfoMeteo = async () => {
  let infoMeteo;
  try {
    const resposta = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.3888&lon=2.159&appid=cf6b3b08d8458fe12e0dddab0b644c2a&lang=CA",
    );
    const dades = await resposta.json();
    infoMeteo = dades.weather[0].description;
  } catch (err) {
    console.log(err.message);
  }
  document.querySelector("#text-meteo").innerHTML = infoMeteo;
};
rebreInfoMeteo();
