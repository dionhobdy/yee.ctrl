const prompts = require('prompts');
const chalk = require('chalk'); // imported console packages

const menu = require('../home'); // module imports

const arcade = require('./preset commands/prearcade');
const movie = require('./preset commands/premovie');
const ocean = require('./preset commands/preocean'); // preset imports

function initPre() {
  let options = ['arcade', 'movie', 'ocean', 'home'];
    (async () => {
      const preset = await prompts({
        type: "text",
        name: "input",
        message: `toggle options ${chalk.bgWhite.black(options[0])} ${chalk.bgWhite.black(options[1])} ${chalk.bgWhite.black(options[2])} ${chalk.bgWhite.black(options[3])}`,
      });
  
      switch(preset.input) {
        case options[0]:
          arcade.preset();
          break;
        case options[1]:
          movie.preset();
          break;
        case options[2]:
          ocean.preset();
          break;
        case options[3]:
          menu.home();
          break;
        default:
          console.log(`${chalk.red('error')} please input valid option`);
          menu.home();
      }
    })();
  } // toggle function to switch lights on/off

function inErr() {
  console.log(chalk.red('error ') + 'please input valid option.');
  initPreset();
  } // error function to notify user of wrong input

exports.initPre = initPre;