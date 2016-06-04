'use strict';

/**
 * Visually print a 2D matrix to the console in ascii.
 *
 * @param {array} arr Matrix to print, must be 2D.
 */
function printMatrix(arr) {
	for(var i = 0; i < arr.length; i++) {
  	let row = '';
    for(var z = 0; z < arr[i].length; z++) {
      row += arr[i][z] + ' ';
    }
    console.log(row);
  }
}
