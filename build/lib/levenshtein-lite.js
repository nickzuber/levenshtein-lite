'use strict';

/** Save a local reference to native min method */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MIN = Math.min;

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
var levenshtein = function levenshtein(a, b) {
  // Local references
  var aLength = a.length;
  var bLength = b.length;

  // Base cases
  if (a === b) return 0;
  if (aLength === 0) return a.length;
  if (bLength === 0) return b.length;

  var matrix = [];

  for (var i = 0; i < aLength; ++i) {
    matrix[i] = Array(bLength).fill(0);
    matrix[i][0] = i;
  }
  for (var _i = 0; _i < bLength; ++_i) {
    matrix[0][_i] = _i;
  }

  for (var j = 1; j < bLength; ++j) {
    for (var _i2 = 1; _i2 < aLength; ++_i2) {
      var cost = a[_i2] === b[j] ? 0 : 1;
      matrix[_i2][j] = MIN(matrix[_i2 - 1][j] + 1, matrix[_i2][j - 1] + 1, matrix[_i2 - 1][j - 1] + cost);
    }
  }

  return matrix[aLength - 1][bLength - 1];
};

exports.default = levenshtein;