let acudit;
const reportAcudits = [];

const mostrarBotons = () => document.querySelectorAll("[puntuacio]").forEach(boto => boto.style.display = "block");

const amagarBotons = () => document.querySelectorAll("[puntuacio]").forEach(boto => boto.style.display = "none");

const rebreAcudit = async () => {  
  try {
    const resposta = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await resposta.json();
    acudit = json.joke;
    console.log("Acudit: ", acudit);
    document.querySelector("#text-acudit").innerHTML = `" ${acudit} "`;
  } catch (err) {
    console.log(err.message);
  }
  mostrarBotons();
}

function puntuacio(score) {
  let report = {
    joke: acudit,
    score: score,
    date: new Date().toISOString()
  };
  reportAcudits.push(report);
  console.table(reportAcudits);
  amagarBotons();
}



