"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  // exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
  // exerciseUtils.blue(stanza);
  // });
  // exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
  // exerciseUtils.blue(stanza);
  // });

  // promise version
  // Tu código acá:

  exerciseUtils
    .promisifiedReadFile("poem-two/stanza-01.txt")
    .then((respuesta) => {
      exerciseUtils.blue(respuesta);
    });
  exerciseUtils
    .promisifiedReadFile("poem-two/stanza-02.txt")
    .then((respuesta) => {
      exerciseUtils.blue(respuesta);
      console.log("done");
    });

  // let promesa1 = exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt");
  // let promesa2 = exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt");
  // Promise.all([promesa1, promesa2]).then((data) => {
  // exerciseUtils.blue(data[0]);
  // exerciseUtils.blue(data[1]);
  // console.log("done");
  // });
}

function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  // filenames.forEach((filename) => {
  // exerciseUtils.readFile(filename, function (err, stanza) {
  // exerciseUtils.blue(stanza);
  // if (err) exerciseUtils.magenta(new Error(err));
  // });
  // });

  // promise version
  // Tu código acá:
  let promesa = exerciseUtils.promisifiedReadFile(filenames[0]);
  for (let i = 1; i <= filenames.length; i++) {
    promesa = promesa.then((v) => {
      exerciseUtils.blue(v);
      return exerciseUtils.promisifiedReadFile(filenames[i]);
    });
    if (i === filenames.length) {
      promesa.catch((error) => {
        exerciseUtils.magenta(new Error(error));
        console.log("done");
      });
    }
  }
}

// EJERCICIO EXTRA
function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
  }
}
