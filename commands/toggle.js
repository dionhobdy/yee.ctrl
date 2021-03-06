const prompts = require('prompts');
const chalk = require('chalk'); // imported console packages

const m = require('../home');
const main = require('../main'); // module imports

function initTog() {
  let options = ['all', 'l1', 'l2', 'home'];
    (async () => {
      const toggleI = await prompts({
        type: "text",
        name: "input",
        message: `toggle options ${chalk.bgWhite.black(options[0])} ${chalk.bgWhite.black(options[1])} ${chalk.bgWhite.black(options[2])} ${chalk.bgWhite.black(options[3])}`,
      });
  
      switch(toggleI.input) {
        case options[0]:
          main.l1.toggle();
          main.l2.toggle();
          m.home();
          break;
        case options[1]:
          main.l1.toggle();
          m.home();
          break;
        case options[2]:
          main.l2.toggle();
          m.home();
          break;
        case options[3]:
          m.home();
          break;
        default:
          inErr();
      }
    })();
  } // toggle function to switch lights on/off

function inErr() {
  console.log(chalk.red('error ') + 'please input valid option.');
  m.home();
  } // error function to notify user of wrong input

exports.initTog = initTog;