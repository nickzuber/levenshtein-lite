'use strict';

/** Save a local reference to native min method */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MIN = Math.min;

function printMatrix(arr) {
  for (var i = 0; i < arr.length; i++) {
    var row = '';
    for (var z = 0; z < arr[i].length; z++) {
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
var levenshtein = function levenshtein(a, b) {
  var k = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

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

  for (var i = 0; i < aLength + 1; ++i) {
    matrix[i] = Array(bLength + 1).fill(0);
    matrix[i][0] = i;
  }
  for (var _i = 0; _i < bLength + 1; ++_i) {
    matrix[0][_i] = _i;
  }

  for (var j = 1; j < bLength + 1; ++j) {
    var curColumn = [];
    for (var _i2 = 1; _i2 < aLength + 1; ++_i2) {
      var cost = a[_i2 - 1] === b[j - 1] ? 0 : 1;
      var curMin = MIN(matrix[_i2 - 1][j] + 1, matrix[_i2][j - 1] + 1, matrix[_i2 - 1][j - 1] + cost);
      matrix[_i2][j] = curMin;
      curColumn.push(curMin);
    }
    // Return -1 if current distance exceeds cap
    if (k && MIN.apply(undefined, curColumn) > k) {
      return -1;
    }
  }

  printMatrix(matrix);
  console.log(' ');

  return matrix[aLength][bLength];
};

exports.default = levenshtein;
module.exports = exports['default'];