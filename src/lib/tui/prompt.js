import Readline from 'node:readline';
import {scheduler} from 'node:timers/promises';

export const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// now, I can listen to Stdin keypress
Readline.emitKeypressEvents(process.stdin);

export const ac = new AbortController();
const signal = ac.signal;

signal.addEventListener('abort', () => {
  rl.close();
  process.stdin.removeAllListeners('keypress');
}, {once: true});

/**
 * @param {string} query
 * @param {function(string)} cb
 */
export function prompt(query, cb) {
  rl.question(`${query}\n> `, {signal}, (answer) => {
    cb(answer);
  });
}

/**
 * @param {string} description
 * @param {number} timeout
 * @param {function()} onCancel
 * @param {function()} onSuccess
 */
export async function waitOrCancel(
    description,
    timeout,
    onCancel,
    onSuccess,
) {
  /** @type number */
  let intervalMs = null;

  /**
   * @param {string} key
   */
  const doCancel = (key) => {
    if (key === 'x') {
      ac.abort();
      console.log('\n');
      intervalMs && clearInterval(intervalMs);
      onCancel();
    }
  };

  prompt('\n', () => {}); // listen for keypress

  process.stdin.on('keypress', doCancel);

  console.log(description, '(Cancel anytime with \'x\')');

  let time = 0;
  intervalMs = setInterval(() => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`time: ${time}ms`);
    time += 100;
  }, 100);

  try {
    await scheduler.wait(timeout, {signal});
    console.log('\n');
    intervalMs && clearInterval(intervalMs);
    onSuccess();
  } catch {/* empty */}
  ac.abort();
}
