'use strict';

const MIN = Math.min;

/**
 * Takes two strings as parameters and computes the Levenshtein
 * distance between the two strings. This currently is a derivation
 * of the Wagner–Fischer algorithm, only instead of using an entire
 * a x b matrix, I use two arrays size a so we don't waste memory.
 *
 * @param  {string}    a  First string argument.
 * @param  {string}    b  Second string argument.
 * @param  {[number]}  k  Optional maximum distance, algorithm will exit early if reached during calcuation
 * @param  {[bool]}    p  Optional partial computation flag, algorithm will only calculate distance of shortest string
 * @return {number}       The levenstein distance of the two strings.
 */
const levenshtein = (a, b, k = false, p = false) => {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('First and second parameters for levenshtein-lite function must be of type string.');
  } else if (k && typeof k !== 'number') {
    throw new TypeError('Third parameters for levenshtein-lite function must be of type number.');
  }

  // Swap shortest string to front
  if (a.length > b.length) {
  	let temp = a;
    a = b;
    b = temp;
  }

  // Clean strings
  a = a.toLowerCase().trim();
  b = b.toLowerCase().trim();

  // Save lengths
  const aLength = a.length;
  const bLength = b.length;

  // Declare columns
  const column_crawler_0 = [];
  const column_crawler_1 = [];

  // If there is a computation limit, set it to shortest string
  const computationLimit = (p) ? aLength : bLength;

  if (a === b) return 0;
  if (aLength === 0) return b.length;
  if (bLength === 0) return a.length;

  for (let i = 0; i < aLength + 1; ++i) {
    column_crawler_0[i] = i;
    column_crawler_1[i] = 0;
  }

  for (let j = 1; j < computationLimit + 1; ++j) {
    column_crawler_1[0] = j;
    for (let i = 1; i < aLength + 1; ++i) {
      let cost = a[i-1] === b[j-1] ? 0 : 1;
      column_crawler_1[i] = MIN(column_crawler_1[i - 1] + 1, column_crawler_0[i] + 1, column_crawler_0[i - 1] + cost);
    }
    if (k && column_crawler_1[column_crawler_1.length - 1] > k) {
      return -1;
    }
    column_crawler_1.map((e, i) => {
    	column_crawler_0[i] = e;
    });
  }
  return column_crawler_1.pop()
}

export default levenshtein;
