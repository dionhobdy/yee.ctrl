const prompts = require('prompts');
const chalk = require('chalk'); // console packages

const rgba = require("color-rgba"); // color conversion package

const b = require('./commands/brightness');
const c = require('./commands/color');
const d = require('./commands/disconnect');
const main = require('./main');
const t = require('./commands/toggle'); // module imports

function home() {
      let options = ["brightness", "color", "disconnect", "toggle"];
      (async () => {
        const home = await prompts({
          type: "text",
          name: "input",
          message: `home options ${chalk.bgWhite.black(options[0])} ${chalk.bgWhite.black(options[1])} ${chalk.bgWhite.black(options[2])} ${chalk.bgWhite.black(options[3])}`,
        });
        
        switch (home.input) {
          case options[0]:
            b.brightness(); 
            break;
          case options[1]:
            c.color();
            break;
          case options[2]:
            d.disconnect();
            break;
          case options[3]:
            t.toggle();
            break;
          default:
            inErr();
        }
      })();
    } // home function aka the main menu

    function inErr() {
      let cRGBA = rgba('red');
        let cAr0 = cRGBA[0];
        let cAr1 = cRGBA[1];
        let cAr2 = cRGBA[2];
        main.l1.color(cAr0, cAr1, cAr2);
        console.log(
          `${chalk.red("error")} invalid option chosen. select valid option.`
        );   
        console.log('');
        setInterval(t.toggle(), 5000);
    } // input error function which changes color to red and pulses

  exports.home = home;