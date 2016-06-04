'use strict';

/** Save a local reference to native min method */
const MIN = Math.min;

/**
 * Takes two strings as parameters and computes the Levenshtein
 * distance between the two strings.
 *
 * This algorithm has an asymptotic runtime of O(n^2).
 *
 * @param  {string} First string argument.
 * @param  {string} Second string argument.
 * @return {number} The levenstein distance of the two strings.
 */
const levenshtein = (a, b) => {
  // Local references
  var aLength = a.length;
  var bLength = b.length;

  // Base cases
  if (a === b) return 0;
  if (aLength === 0) return a.length;
  if (bLength === 0) return b.length;

  var matrix = [];

  for (let i = 0; i < aLength; ++i) {
    matrix[i] = Array(bLength).fill(0);
    matrix[i][0] = i;
  }
  for (let i = 0; i < bLength; ++i) {
    matrix[0][i] = i;
  }

  for (let j = 1; j < bLength; ++j) {
    for (let i = 1; i < aLength; ++i) {
      let cost = a[i] === b[j] ? 0 : 1;
      matrix[i][j] = MIN(matrix[i - 1][j] + 1,
                         matrix[i][j - 1] + 1,
                         matrix[i - 1][j - 1] + cost);
    }
  }

  return matrix[aLength-1][bLength-1];
}

export default levenshtein;
