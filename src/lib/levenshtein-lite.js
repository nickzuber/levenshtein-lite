'use strict';

/** Save a local reference to native min method */
const MIN = Math.min;

function printMatrix(arr) {
	for(var i = 0; i < arr.length; i++) {
  	let row = '';
    for(var z = 0; z < arr[i].length; z++) {
      row += arr[i][z] + ' ';
    }
    console.log(row);
  }
}

/**
 * Takes two strings as parameters and computes the Levenshtein
 * distance between the two strings. This currently is an implementation
 * of the Wagner–Fischer algorithm.
 *
 * This algorithm has an asymptotic runtime of O(n^2).

 * TODO: Consider Hirschberg's algorithm or the two matrix rows approach
 *       for more conservative memory usage.
 *
 * @param  {string}    a  First string argument.
 * @param  {string}    b  Second string argument.
 * @param  {[number]}  k  Optional maximum distance, algorithm will exit early if reached during calcuation
 * @return {number}       The levenstein distance of the two strings.
 */
const levenshtein = (a, b, k = false) => {
  // Clean strings
  a = a.toLowerCase().trim();
  b = b.toLowerCase().trim();

  // Local references
  var aLength = a.length;
  var bLength = b.length;

  // Base cases
  if (a === b) return 0;
  if (aLength === 0) return a.length;
  if (bLength === 0) return b.length;

  var matrix = [];

  for (let i = 0; i < aLength + 1; ++i) {
    matrix[i] = Array(bLength + 1).fill(0);
    matrix[i][0] = i;
  }
  for (let i = 0; i < bLength + 1; ++i) {
    matrix[0][i] = i;
  }

  for (let j = 1; j < bLength + 1; ++j) {
    let curColumn = [];
    for (let i = 1; i < aLength + 1; ++i) {
      let cost = a[i-1] === b[j-1] ? 0 : 1;
      let curMin = MIN(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
      matrix[i][j] = curMin;
      curColumn.push(curMin);
    }
    // Return -1 if current distance exceeds cap
    if (k && MIN(...curColumn) > k) {
      return -1;
    }
  }

  printMatrix(matrix);
  console.log(' ');

  return matrix[aLength][bLength];
}

export default levenshtein;
