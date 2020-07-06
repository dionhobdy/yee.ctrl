const chalk = require('chalk'); // client packageds

const main = require('../main'); // module imports

function disconnect() {
    main.l1.disconnect();
    main.l1.on("disconnected", (light) => {
      console.log(`${chalk.cyan("T H N K . Y O U")}`);
      console.log(`${chalk.green("disconencted")} from ${chalk.cyan(light.ip)}.`);
    });
  } // disconnect function to disconnect from light

  exports.disconnect = disconnect;