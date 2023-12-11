import {prompt} from './prompt.js';
import {printList} from './print.js';

/**
 * @param {string[]} list
 * @param {{label: string?, errMsg: string?}} options
 * @return {Promise<string?>}
 */
export const promptMenu = (list = [], options) => {
  if (list.length) {
    printList(list);
    return new Promise((resolve) => {
      prompt(options.label || 'Choose among the list by its number', (rIdx) => {
        if (rIdx < 1 || rIdx > list.length) {
          if (!options.errMsg) throw new Error('Invalid choice');
          else console.log(options.errMsg);
          resolve(null);
        }
        resolve(list[rIdx - 1]);
      });
    });
  }
};
