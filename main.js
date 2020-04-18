const chalk = require("chalk");
const prompts = require("prompts");
//console packages

const rgba = require("color-rgba");
// color conversion package

const { Bulb } = require("yeelight.io");
// light package

const l1 = new Bulb("BULB_IP");
l1.connect();
// light IP address and connect function call

l1.on("connected", (light) => {
  console.log(`${chalk.cyan("Y E E - C O N T R O L")}`);
  // app title
  console.log(`${chalk.green("connected")} to ${chalk.cyan(light.ip)}`);
  home();
});
// light on connection

function home() {
  let options = ["brightness", "color", "disconnect", "toggle"];
  (async () => {
    const home = await prompts({
      type: "text",
      name: "input",
      message: chalk.bgWhite.black(options[0]) + ' ' + chalk.bgWhite.black(options[1]) + ' ' + chalk.bgWhite.black(options[2]) + ' ' + chalk.bgWhite.black(options[3]),
    });

    switch (home.input) {
      case options[0]:
        brightness();
        break;
      case options[1]:
        color();
        break;
      case options[2]:
        disconnect();
        break;
      case options[3]:
        toggle();
        break;
      default:
        console.log(
          `${chalk.red("error")} invalid option chosen please reset app`
        );
    }
  })();
}
// home function aka 'Main Menu'

function brightness() {
  let options = ["min", "25", "50", "75", "max", "home"];
  (async () => {
    const brightness = await prompts({
      type: "text",
      name: "input",
      message: chalk.bgWhite.black(options[0]) + ' ' + chalk.bgWhite.black(options[1]) + ' ' + chalk.bgWhite.black(options[2]) + ' ' + chalk.bgWhite.black(options[3]) + ' ' + chalk.bgWhite.black(options[4]) + ' ' + chalk.bgWhite.black(options[5]),
    });

    switch (brightness.input) {
      case options[0]:
        l1.brightness(1);
        home();
        break;
      case options[1]:
        l1.brightness(25);
        home();
        break;
      case options[2]:
        l1.brightness(50);
        home();
        break;
      case options[3]:
        l1.brightness(75);
        home();
        break;
      case options[4]:
        l1.brightness(100);
        home();
        break;
      case options[5]:
        home();
        break;
      default:
        console.log(`${chalk.red("error")} invalid option chosen`);
        home();
    }
  })();
}
// brightness function to choose light brightness

function color() {
  (async () => {
    const color = await prompts({
      type: "text",
      name: "input",
      message: `${chalk.bgWhite.black('choose color')}`,
    });
    let cRGBA = rgba(color.input);
    let cArg0 = cRGBA[0];
    let cArg1 = cRGBA[1];
    let cArg2 = cRGBA[2];
    l1.color(cArg0, cArg1, cArg2);
    console.log(`${chalk.green('color')} changed to ${chalk.cyan(color.input)}`);
    home();
  })();
}
// color function to change light color

function disconnect() {
  l1.disconnect();
  l1.on("disconnected", (light) => {
    console.log(`${chalk.cyan(" T H A N K - Y O U")}`);
    console.log(`${chalk.green("disconencted")} from ${chalk.cyan(light.ip)}`);
  });
}
// disconnect function to disconnect from light

function toggle() {
  l1.toggle();
  home();
}
// toggle function to switch light on/off
