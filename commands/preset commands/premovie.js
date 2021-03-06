const chalk = require("chalk"); // console packages

const main = require('../../main'); 
const menu = require('../../home'); // module imports

function preset() {
  console.log(`${chalk.green('setting')} light ${chalk.cyan('l1')} (${chalk.cyan(main.l1.ip)})`);

  setTimeout(l1PreColor, 1000);
  function l1PreColor() {
    main.l1.color(255, 255, 255);
  }

  setTimeout(l1PreBright, 2000);
  function l1PreBright() {
    main.l1.brightness(1);
  }

  setTimeout(notifLight, 3000);
  function notifLight() {
    console.log(`${chalk.green('setting')} light ${chalk.cyan('l2')} (${chalk.cyan(main.l2.ip)})`);
  }

  setTimeout(l2PreColor, 4000);
  function l2PreColor() {
    main.l2.color(255, 255, 255);
  }

  setTimeout(l2PreBright, 5000);
  function l2PreBright() {
    main.l2.brightness(1);
  }

  setTimeout(notifSet, 6000);
  function notifSet() {
    console.log(`${chalk.green('preset')} set to ${chalk.cyan('movie')}.`);
  }

  setTimeout(home, 7000);
  function home() {
    menu.home();
  }
}
exports.preset = preset;