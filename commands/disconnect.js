const chalk = require('chalk'); // client packages

const main = require('../main'); // module imports

function initDis() {
    main.l1.disconnect();
    main.l1.on("disconnected", (light1) => {
      console.log(`${chalk.green("disconnected")} from ${chalk.cyan(`l1 ${light1.ip}`)}`);
      
      main.l2.disconnect();
      main.l2.on("disconnected", (light2) => {
      console.log(`${chalk.green("disconnected")} from ${chalk.cyan(`l2 ${light2.ip}`)}`);
      console.log(`${chalk.cyan("T H A N K . Y O U")}`);
    });
    });
  } // disconnect function to disconnect from light

  exports.initDis = initDis;