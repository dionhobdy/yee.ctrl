const chalk = require("chalk");
const prompts = require("prompts");
// console packages

const rgba = require("color-rgba"); // color conversion package

const m = require('../home');
const main = require('../main');
// module imports

function color() {
    (async () => {
      const color = await prompts({
        type: "text",
        name: "input",
        message: `${chalk.bgWhite.black('input color')}`,
      });
      let cRGBA = rgba(color.input);
      let cAr0 = cRGBA[0];
      let cAr1 = cRGBA[1];
      let cAr2 = cRGBA[2];
      main.l1.color(cAr0, cAr1, cAr2);
      console.log(`${chalk.green('color')} changed to ${chalk.cyan(color.input)}.`);
      m.home();
    })();
  } // color function to change light color

exports.color = color;