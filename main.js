const chalk = require("chalk");

const { Bulb } = require("yeelight.io"); // light package

const l1 = new Bulb("10.0.0.4");
const l2 = new Bulb("10.0.0.22");
l1.connect(); 
l2.connect(); // light IP address and connect function call

const menu = require('./home'); // module imports

l1.on("connected", (light) => {
  console.log(`${chalk.cyan("Y E E . C T R L")}`); // app title
  console.log(`${chalk.green("connected")} to ${chalk.cyan(`l1 ${light.ip}`)}`);
  l2.on("connected", (light) => {
    console.log(`${chalk.green("connected")} to ${chalk.cyan(`l2 ${light.ip}`)}`);
    menu.home();
  });
}); // light on connection

exports.l1 = l1;
exports.l2 = l2;