const chalk = require("chalk");
const prompts = require("prompts");
// console packages

const m = require('../home');
const main = require('../main');
// module imports

function brightness() {
  let options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    (async () => {
      const brightness = await prompts({
        type: "text",
        name: "input",
        message: `input brightness ${chalk.bgWhite.black('1 - 10')}`,
      });
      
      switch(brightness.input) {
        case options[0]:
          main.l1.brightness(1);
          m.home();
          break;
        case options[1]:
          main.l1.brightness(10);
          m.home();
          break;
        case options[2]:
          main.l1.brightness(20);
          m.home();
          break;
        case options[3]:
          main.l1.brightness(30);
          m.home();
          break;
        case options[4]:
          main.l1.brightness(40);
          m.home();
          break;
        case options[5]:
          main.l1.brightness(50);
          m.home();
          break;
        case options[6]:
          main.l1.brightness(60);
          m.home();
          break;
        case options[7]:
          main.l1.brightness(70);
          m.home();
          break;
        case options[8]:
          main.l1.brightness(80);
          m.home();
          break;
        case options[9]:
          main.l1.brightness(90);
          m.home();
          break;
        default:
          console.log(`${chalk.red('error')} please input the proper option`)
          m.home();
      }
    })();
  } // brightness function to choose light brightness

exports.brightness = brightness;