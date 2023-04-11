const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { request } = require("http");

function pwd(args, print) {
  print(__dirname.split("\\").at(-1));
}

function date(args, print) {
  print(Date());
}

function echo() {}

function ls(args, print) {
  fs.readdir(".", (err, files) => {
    if (err) {
      console.log(err);
    } else {
      print(files.join("\n"));
    }
  });
}

function cat(args, print) {
  fs.readFile(args[0], (err, data) => {
    print(data);
  });
}

function head(args, print) {
  fs.readFile(args[0], "utf-8", (err, data) => {
    print(data.split("\n").splice(0.5).join("\n"));
  });
}

function tail(args, print) {
  fs.readFile(args[0], "utf-8", (err, data) => {
    print(data.split("\n").splice(-5).join("\n"));
  });
}

function curl(args, print) {
  request(args[0], (err, data) => {
    console.log(data);
    print(data.body);
  });
}

module.exports = {
  echo,
  pwd,
  date,
  ls,
  cat,
  head,
  tail,
  curl,
};
