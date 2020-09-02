const chalk = require("chalk");
const prompts = require("prompts");
// console packages

const menu = require('../../home');
const main = require('../../main');
// module imports

function bright() {
  
    let options1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      (async () => {
        const brightness = await prompts({
          type: "text",
          name: "input",
          message: `input brightness ${chalk.bgWhite.black('1 - 10')}`,
        });  
        
        switch(brightness.input) {
          case options1[0]:
            main.l2.brightness(1);
            menu.home();
            break;
          case options1[1]:
            main.l2.brightness(10);
            menu.home();
            break;
          case options1[2]:
            main.l2.brightness(20);
            menu.home();
            break;
          case options1[3]:
            main.l2.brightness(30);
            menu.home();
            break;
          case options1[4]:
            main.l2.brightness(40);
            menu.home();
            break;
          case options1[5]:
            main.l2.brightness(50);
            menu.home();
            break;
          case options1[6]:
            main.l2.brightness(60);
            menu.home();
            break;
          case options1[7]:
            main.l2.brightness(70);
            menu.home();
            break;
          case options1[8]:
            main.l2.brightness(80);
            menu.home();
            break;
          case options1[9]:
            main.l2.brightness(90);
            menu.home();
            break;
          default:
            console.log(`${chalk.red('error')} please input valid option.`)
            menu.home();
        }
      })();
    } // brightness function to choose light brightness
  
  exports.bright = bright;