let acudit: string;
interface tipusAcudit { joke: string; score: number; date: string };
const reportAcudits: tipusAcudit[] = [];

const mostrarBotons = () =>
  setTimeout(
    () =>
      document.querySelectorAll("[puntuacio]").forEach((boto) => {
        const elementBoto = boto as HTMLElement;
        elementBoto.style.display = "block";
      }),
    300,
  );
const amagarBotons = () =>
  setTimeout(
    () =>
      document.querySelectorAll("[puntuacio]").forEach((boto) => {
        const elementBoto = boto as HTMLElement;
        elementBoto.style.display = "block";
      }),
    400,
  );

const rebreAcudit = async () => {
  try {
    const resposta = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const dades = await resposta.json();
    acudit = dades.joke;
    console.log("Acudit:", acudit);
  } catch (err: any) {
    console.log(err.message);
  }
  const textAcudit = document.querySelector("#text-acudit") as HTMLElement;
  textAcudit.innerHTML = `" ${acudit} "`;
  mostrarBotons();
};

const rebreAcudit2 = async () => {
  try {
    const resposta = await fetch("https://api.chucknorris.io/jokes/random");
    const dades = await resposta.json();
    acudit = dades.value;
    console.log("Acudit2:", acudit);
  } catch (err: any) {
    console.log(err.message);
  }
  const textAcudit = document.querySelector("#text-acudit") as HTMLElement;
  textAcudit.innerHTML = `" ${acudit} "`;
  mostrarBotons();
};

const triaApi = () : void => {
  const botoAcudit = document.querySelector(".boto-acudit") as HTMLElement;
  botoAcudit.innerText = "Següent acudit";

  const random: number = Math.trunc(Math.random() * 10);
  console.log("Random:", random);
  if (random < 5) rebreAcudit();
  else rebreAcudit2();
  canviForma(random);
};

function puntuacio(score: number) :void {
  let report: tipusAcudit = {
    joke : acudit,
    score: score,
    date: new Date().toISOString(),
  };
  reportAcudits.push(report);
  console.table(reportAcudits);
  amagarBotons();
}

const rebreInfoMeteo = async () => {
  let imgMeteo, tempMeteo;
  try {
    const apiLatLon: string = "lat=41.3888&lon=2.159";
    const apiKey: string = "cf6b3b08d8458fe12e0dddab0b644c2a";
    const apiLang: string = "CA";
    const apiUnit: string= "metric";
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${apiLatLon}&appid=${apiKey}&lang=${apiLang}&units=${apiUnit}`,
    );

    const dades = await resposta.json();
    tempMeteo = dades.main.temp.toFixed(1);
    imgMeteo = dades.weather[0].icon;
  } catch (err: any) {
    console.log(err.message);
  }
  const textMeteo = document.querySelector("#text-meteo") as HTMLElement;
  textMeteo.innerHTML = tempMeteo;
  const imgMeteor = document.querySelector(".img-meteo") as HTMLImageElement;
  imgMeteor.src = `http://openweathermap.org/img/w/${imgMeteo}.png`;
};
rebreInfoMeteo();

const canviForma = (random: number) : void => {
  const formaGran = document.querySelector(".forma-gran") as HTMLElement;
  formaGran.style.backgroundImage = `url(./assets/svg/blob-${random}.svg`;

  let random2 = random + 1;
  if (random2 == 10) random2 = 0;
  const formaPetitaDalt = document.querySelector(".forma-petita-dalt") as HTMLElement;
  formaPetitaDalt.style.backgroundImage = `url(./assets/svg/blob-${random2}.svg`;
  
  let random3 = random + 2;
  if (random3 == 10 || random3 == 11) random3 = 0;
  const formaPetitaBaix = document.querySelector(".forma-petita-baix") as HTMLElement;
  formaPetitaBaix.style.backgroundImage = `url(./assets/svg/blob-${random3}.svg`;
}
