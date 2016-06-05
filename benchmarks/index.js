'use strict';

const fs = require('fs');
const winston = require('winston');
winston.add(winston.transports.File, { filename: 'benchmarks/benchmarks.log' });
winston.log('info', 'Running speed tests on levenshtein distance calculations.');
const wordListPath = require('word-list');
const shuffle = require('knuth-shuffle').knuthShuffle;
const distance = require('../build');

const CAP = 3;
var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

shuffle(wordArray);

/**
 * Levenshtein distance without any upper bounded cap on distance calcuations.
 */
winston.info(`Evaluating ${wordArray.length.toLocaleString()} words, calculating the Levenshtein distance ${(wordArray.length / 2).toLocaleString()} times without a distance cap.`);
var start = new Date().getTime();
for (let i = 0; i < wordArray.length; i = i + 2) {
  distance(wordArray[i], wordArray[i + 1]);
}
var end = new Date().getTime();
winston.info(`This process took ${(end-start)/1000} seconds to execute.`);

/**
 * Levenshtein distance with an upper bounded cap on distance calcuations.
 */
winston.info(`Evaluating ${wordArray.length.toLocaleString()} words, calculating the Levenshtein distance ${(wordArray.length / 2).toLocaleString()} times with a distance cap of ${CAP}.`);
var start = new Date().getTime();
for (let i = 0; i < wordArray.length; i = i + 2) {
  distance(wordArray[i], wordArray[i + 1], CAP);
}
var end = new Date().getTime();
winston.info(`This process took ${(end-start)/1000} seconds to execute.`);
