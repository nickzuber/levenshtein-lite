'use strict';

var fs = require('fs');
var winston = require('winston');
var wordListPath = require('word-list');
var shuffle = require('knuth-shuffle').knuthShuffle;
var distance = require('../build');

var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

shuffle(wordArray);

/**
 * Levenshtein distance without any upper bounded cap on distance calcuations.
 */
console.log(`Evaluating ${wordArray.length}, calculating the Levenshtein distance ${(wordArray.length / 2)} times without a distance cap.`);
var start = new Date().getTime();
for (let i = 0; i < wordArray.length; i = i + 2) {
  distance(wordArray[i], wordArray[i + 1]);
}
var end = new Date().getTime();
console.log(`This process took ${(end-start)/1000} seconds to execute.`);

/**
 * Levenshtein distance with an upper bounded cap on distance calcuations.
 */
console.log(`Evaluating ${wordArray.length}, calculating the Levenshtein distance ${(wordArray.length / 2)} times with a distance cap.`);
var start = new Date().getTime();
for (let i = 0; i < wordArray.length; i = i + 2) {
  distance(wordArray[i], wordArray[i + 1], 3);
}
var end = new Date().getTime();
console.log(`This process took ${(end-start)/1000} seconds to execute.`);
