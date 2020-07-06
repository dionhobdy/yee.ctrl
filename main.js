const chalk = require("chalk");
const prompts = require("prompts"); // console packages

const { Bulb } = require("yeelight.io"); // light package

const l1 = new Bulb("LIGHT_IP");
l1.connect(); // light IP address and connect function call

const m = require('./home'); // module imports

l1.on("connected", (light) => {
  console.log(`${chalk.cyan("Y E E . C T R L")}`); // app title
  console.log(`${chalk.green("connected")} to ${chalk.cyan(light.ip)}.`);
  m.home();
}); // light on connection
 
function disconnect() {
  l1.disconnect();
  l1.on("disconnected", (light) => {
    console.log(`${chalk.cyan("T H N K . Y O U")}`);
    console.log(`${chalk.green("disconencted")} from ${chalk.cyan(light.ip)}.`);
  });
} // disconnect function to disconnect from light

exports.l1 = l1;
