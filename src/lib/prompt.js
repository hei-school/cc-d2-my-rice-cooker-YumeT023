import Readline from 'node:readline';

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** @type number */
let timeout;
const ac = new AbortController();
const signal = ac.signal;

signal.addEventListener('abort', () => {
  rl.close();
  timeout && clearTimeout(timeout);
}, {once: true});

/**
 * @param {string} query
 * @param {function(string)} cb
 */
export function prompt(query, cb) {
  timeout = setTimeout(() => ac.abort(), 10_000);
  rl.question(query, {signal}, (answer) => {
    ac.abort();
    cb(answer);
  });
}
