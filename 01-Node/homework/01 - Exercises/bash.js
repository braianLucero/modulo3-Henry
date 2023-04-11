const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    let args = data.toString().trim().split(" ");
    let cmd = args.shift();
    if (commands[cmd]) {
      commands[cmd](args, print);
    } else {
      process.stdout.write(" command invalid");
    }
  });
}
function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

bash();
module.exports = {
  print,
  bash,
};
