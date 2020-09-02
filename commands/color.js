const chalk = require("chalk");
const prompts = require("prompts"); // console packages
const rgba = require("color-rgba"); // node modules

const menu = require('../home');
const main = require('../main'); // module imports

function initCol() {
  let options = ['all', 'l1', 'l2', 'home'];
  (async () => {
    const bulb = await prompts({
      type: "text",
      name: "input",
      message: `${chalk.bgWhite.black(options[0])} ${chalk.bgWhite.black(options[1])} ${chalk.bgWhite.black(options[2])} ${chalk.bgWhite.black(options[3])}`,
    });
    switch(bulb.input) {

      case options[0]:
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
          main.l2.color(cAr0, cAr1, cAr2);
          console.log(`${chalk.green('color')} changed to ${chalk.cyan(color.input)} (${chalk.cyan(cAr0, cAr1, cAr2)}).`);
        menu.home();
        })();
        break;

      case options[1]:
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
            console.log(`${chalk.green('color')} changed to ${chalk.cyan(color.input)} (${chalk.cyan(cAr0, cAr1, cAr2)}).`);
          menu.home();
          })();
          break;
      
      case options[2]:
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
          main.l2.color(cAr0, cAr1, cAr2);
          console.log(`${chalk.green('color')} changed to ${chalk.cyan(color.input)} (${chalk.cyan(cAr0, cAr1, cAr2)}).`);
        menu.home();
        })();
        break;
      
      case options[3]:
      menu.home();
      break;
      
      default:
        console.log(`${chalk.red('error')} input a valid option`);
        menu.home();
    }
  }) ();
}

exports.initCol = initCol;