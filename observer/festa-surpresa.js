const readLine = require("readline");

function obterResposta(pergunta) {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

function namorada() {
  console.log("Namorada: Apagar as luzes");
  console.log("Namorada: Pedir silêncio");
  console.log("Namorada: Surpresa!!!!!!");
}

function sindico() {
  console.log("Síndico: Monitorando Barulho");
}

async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O namorado chegou? (s/N/q)");
    if (resp.toLowerCase() === "s") {
      (interessados || []).forEach((obs) => obs());
      break;
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

porteiro([sindico, namorada]);
