const consoles = function(color, text) {
  let str = "";
  switch (color) {
    case "red":
      str = `${"\033"}[31m ${text}`;
      break;
    case "green":
      str = `${"\033"}[32m ${text}`;
      break;
    case "yellow":
      str = `${"\033"}[33m ${text}`;
      break;
    case "white":
      str = `${"\033"}[37m ${text}`;
      break;
    default:
      str = "";
  }
  console.log(str);
};

consoles.red = function (text) {
  console.log(`${"\033"}[31m ${text}`);
}

consoles.green = function (text) {
  console.log(`${"\033"}[32m ${text}`);
}

console.yellow = function (text) {
  console.log(`${"\033"}[33m ${text}`);
}

consoles.white = function(text) {
  console.log(`${"\033"}[37m ${text}`);
};

module.exports = consoles