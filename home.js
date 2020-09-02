const prompts = require('prompts');
const chalk = require('chalk'); // imported console packages

const brightness = require('./commands/brightness');
const color = require('./commands/color');
const disconnect = require('./commands/disconnect');
const preset = require('./commands/presets');
const toggle = require('./commands/toggle'); // module imports

function home() {
      let options = ["brightness", "color", "disconnect", "preset", "toggle"];
      (async () => {
        const home = await prompts({
          type: "text",
          name: "input",
          message: `home options ${chalk.bgWhite.black(options[0])} ${chalk.bgWhite.black(options[1])} ${chalk.bgWhite.black(options[2])} ${chalk.bgWhite.black(options[3])} ${chalk.bgWhite.black(options[4])}`,
        });
        
        switch (home.input) {
          case options[0]:
            brightness.initBri(); 
            break;
          case options[1]:
            color.initCol();
            break;
          case options[2]:
            disconnect.initDis();
            break;
          case options[3]:
            preset.initPre();
            break;
          case options[4]:
            toggle.initTog();
            break;
          default:
            inErr();
        }
      })();
    } // home function aka the main menu

    function inErr() {
      console.log(chalk.red('error ') + 'please input valid option.');
      home();
    } // error function that redirects user to home() if invalid option is input
    
  exports.home = home;