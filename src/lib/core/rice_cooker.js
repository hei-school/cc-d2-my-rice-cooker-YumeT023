import {DEFAULT_RICE_COOKER_CAPACITY_CUP} from './constants.js';

/**
 * This class simulates the behavior of a real rice cooker
 */
export class RiceCooker {
  #isPlugged;
  #isLidOpen;
  capacity;

  /**
   * @param {number} capacity
   * @constructor
  */
  constructor(capacity = DEFAULT_RICE_COOKER_CAPACITY_CUP) {
    this.#isPlugged = false;
    this.#isLidOpen = false;
    this.capacity = capacity;
  }

  /**
   * @param {boolean} isPlugged
   */
  setIsPlugged(isPlugged) {
    if (isPlugged === this.#isPlugged) {
      console.log('[INFO] Rice cooker is already ' +
      this.#getTextualStatus().main);
      return;
    }
    this.#isPlugged = isPlugged;
  }

  /**
   * @param {boolean} isOpen
   */
  setIsLidOpen(isOpen) {
    if (this.#isPlugged) {
      console.log('[DANGEROUS] You shouldn\'t touch the lid when the rice ' +
      'cooker is plugged');
    }
    if (isOpen === this.#isLidOpen) {
      console.log('[INFO] Lid is already ' + this.#getTextualStatus().lid);
      return;
    }
    this.#isLidOpen = isOpen;
  }

  /**
   * @return {{main: string,lid: string}}
   */
  #getTextualStatus() {
    return {
      main: this.#isPlugged ? 'plugged' : 'unplugged',
      lid: this.#isLidOpen ? 'opened' : 'closed',
    };
  }

  /**
   * @return {boolean}
   */
  get isPlugged() {
    return this.#isPlugged;
  }

  /**
   * @return {boolean}
   */
  get isLidOpen() {
    return this.#isLidOpen;
  }
}
