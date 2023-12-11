// TODO: unify export with index_file
import {promptMenu} from './lib/tui/prompt_capabilities.js';
import {printLogo} from './lib/tui/print.js';
import {RiceCooker} from './lib/core/rice_cooker.js';
import {ac} from './lib/tui/prompt.js';

/**
 * Gets menu according to the state of the rice cooker.
 * @param {RiceCooker} cooker;
 * @return {string[]}
 */
const getMenu = (cooker) => {
  const menu = [];
  if (!cooker.isPlugged) {
    menu.push('Open lid', 'Close lid');
  }
  if (!cooker.isLidOpen) {
    menu.push('Plug', 'Unplug');
  }
  menu.push('Exit');
  return menu;
};

/**
 * entry point
 */
async function main() {
  printLogo();

  const cooker = new RiceCooker();

  let exit = false;
  while (!exit) {
    const menu = await promptMenu(getMenu(cooker), {errMsg: 'no menu'});

    switch (menu) {
      case 'Plug':
        cooker.setIsPlugged(true);
        break;
      case 'Unplug':
        cooker.setIsPlugged(false);
        break;
      case 'Open lid':
        cooker.setIsLidOpen(true);
        break;
      case 'Close lid':
        cooker.setIsLidOpen(false);
        break;
      case 'Exit':
        console.log('Exited');
        exit = true;
        break;
      default:
        console.log('Unknown menu');
        break;
    }
  }
  ac.abort();
}

main();
