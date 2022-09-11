let acudit;
const reportAcudits = [];

const mostrarBotons = () => setTimeout(() => document.querySelectorAll("[puntuacio]").forEach((boto) => (boto.style.display = "block")), 300);
const amagarBotons = () => setTimeout(() => document.querySelectorAll("[puntuacio]").forEach((boto) => (boto.style.display = "none")), 400);

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

const triaApi = () => {
  const botoAcudit = document.querySelector(".boto-acudit");
  botoAcudit.innerText = "Següent acudit";

  const random = parseInt(Math.random()*10);
  console.log("Random:", random);
  if (random < 5) rebreAcudit();
  else rebreAcudit2();
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

rebreInfoMeteo = async () => {
  let imgMeteo, tempMeteo;
  try {
    const resposta = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.3888&lon=2.159&appid=cf6b3b08d8458fe12e0dddab0b644c2a&lang=CA&units=metric",
    );
    const dades = await resposta.json();
    tempMeteo = dades.main.temp;
    imgMeteo = dades.weather[0].icon;
  } catch (err) {
    console.log(err.message);
  }
  document.querySelector("#text-meteo").innerHTML = tempMeteo;
  document.querySelector(".img-meteo").src = `http://openweathermap.org/img/w/${imgMeteo}.png`;
};
rebreInfoMeteo();

canviForma = (random) => {
  document.querySelector(".forma-gran").style.backgroundImage = `url(./assets/svg/blob-${random}.svg`;
  let random2 = random + 1;
  if (random2 == 10) random2 = 0;
  document.querySelector(".forma-petita-dalt").style.backgroundImage = `url(./assets/svg/blob-${random2}.svg`;
  let random3 = random + 2;
  if (random3 == 10 || random3 == 11) random3 = 0;
  document.querySelector(".forma-petita-baix").style.backgroundImage = `url(./assets/svg/blob-${random3}.svg`;
}
