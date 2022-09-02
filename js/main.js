const rebreAcudit = async () => {
  try {
    const resposta = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await resposta.json();
    console.log("Acudit: ", json.joke);
    document.querySelector("#text-acudit").innerHTML = `" ${json.joke} "`;
  } catch (err) {
    console.log(err.message);
  }
};
