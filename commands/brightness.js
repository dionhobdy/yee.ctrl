const chalk = require("chalk");
const prompts = require("prompts");
// console packages

const menu = require('../home');
const main = require('../main');
// module imports

const all = require('./brightness commands/allbright');
const l1 = require('./brightness commands/l1bright');
const l2 = require('./brightness commands/l2bright');
// brightness commands

function initBri() {

  let options = ['all', 'l1', 'l2', 'home'];
    (async () => {
      const device = await prompts({
        type: "text",
        name: "input",
        message: `brightness options ${chalk.bgWhite.black(options[0])} ${chalk.bgWhite.black(options[1])} ${chalk.bgWhite.black(options[2])} ${chalk.bgWhite.black(options[3])}`,
      });

      switch(device.input) {
        case options[0]:
          all.bright();
          break;
        case options[1]:
          l1.bright();
          break;
        case options[2]:
          l2.bright();
          break;
        case options[3]:
          menu.home();
          break;
        default:
          console.log(`${chalk.red('error')} please input valid option`);
          inputErr();
      }
    })();
  } // bulb input function for brightness controls

exports.initBri = initBri;