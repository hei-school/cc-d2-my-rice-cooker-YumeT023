// TODO: unify export with index_file
import {promptMenu} from './lib/tui/prompt_capabilities.js';
import {ac, promptAsync} from './lib/tui/prompt.js';
import {printLogo} from './lib/tui/print.js';
import {RiceCooker} from './lib/core/rice_cooker.js';

/**
 * Gets menu according to the state of the rice cooker.
 * @param {RiceCooker} cooker;
 * @return {string[]}
 */
const getMenu = (cooker) => {
  const menu = [];

  if (cooker.isLidOpen) {
    menu.push('Place raw food in the inner pot', 'Add water');
  } else {
    menu.push('Plug', 'Unplug');
  }

  if (cooker.isPlugged) {/* Empty */} else {
    menu.push('Open lid', 'Close lid');
  }

  menu.push('Done');
  return menu;
};

/**
 * @return {Promise<RiceCooker>}
 */
const getRiceCooker = async () => {
  const capacity = await promptAsync('Enter the rice cooker capacity in cup');
  return new RiceCooker(capacity);
};

/**
 * entry point
 */
async function main() {
  printLogo();

  const cooker = await getRiceCooker();

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
      case 'Place raw food in the inner pot': {
        const riceCup = await promptAsync('cup of rice');
        cooker.addRice(+riceCup);
      }
        break;
      case 'Add water': {
        cooker.logRecommendation();
        const waterCup = await promptAsync('water cup');
        cooker.addWater(+waterCup);
      }
        break;
      case 'Done':
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
