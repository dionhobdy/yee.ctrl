const m = require('../home');
const main = require('../main');
// module imports

function toggle() {
    main.l1.toggle();
    m.home();
  } // toggle function to switch light on/off

exports.toggle = toggle;