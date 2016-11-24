'use strict';

var LevenshteinLite = require('../build');
var Tape = require('tape');

Tape('Should return 3', function(t) {

  // Basic tests
  try {
    var distance = LevenshteinLite('kitten', 'sitting');
    t.equal(distance, 3, 'Checking to see if Levenshtein distance was calculated properly.');
    distance = LevenshteinLite('summertime', 'spring');
    t.equal(distance, 7, 'Checking to see if Levenshtein distance was calculated properly.');
    distance = LevenshteinLite('book', 'back');
    t.equal(distance, 2, 'Checking to see if Levenshtein distance was calculated properly.');
    distance = LevenshteinLite('crack', 'crouton');
    t.equal(distance, 5, 'Checking to see if Levenshtein distance was calculated properly.');
    distance = LevenshteinLite('hoopla', 'hadoop');
    t.equal(distance, 4, 'Checking to see if Levenshtein distance was calculated properly.');
    distance = LevenshteinLite('playground', 'playgoudn');
    t.equal(distance, 3, 'Checking to see if Levenshtein distance was calculated properly.');
    distance = LevenshteinLite('granola', 'grandma');
    t.equal(distance, 2, 'Checking to see if Levenshtein distance was calculated properly.');
    distance = LevenshteinLite('levenshtein', 'meilenstein');
    t.equal(distance, 4, 'Checking to see if Levenshtein distance was calculated properly.');
  } catch(e) {
    t.fail('LevenshteinLite has failed ungracefully: ' + e.message);
  }

  // With distance cap
  try {
    var distance = LevenshteinLite('kitten', 'sitting', 2);
    t.equal(distance, -1, 'Checking to see if Levenshtein distance exits early when cap is hit.');
    distance = LevenshteinLite('summertime', 'spring', 3);
    t.equal(distance, -1, 'Checking to see if Levenshtein distance exits early when cap is hit.');
    distance = LevenshteinLite('faverite', 'ea', 1);
    t.equal(distance, -1, 'Checking to see if Levenshtein distance exits early when cap is hit.');
  } catch(e) {
    t.fail('LevenshteinLite has failed ungracefully: ' + e.message);
  }

  // With computation limit
  try {
    var distance = LevenshteinLite('com', 'computer', false, true);
    t.equal(distance, 0, 'Checking to see if Levenshtein computes partial strings correctly.');
    distance = LevenshteinLite('computer', 'com', false, true);
    t.equal(distance, 0, 'Checking to see if Levenshtein computes partial strings correctly.');
    distance = LevenshteinLite('computer', 'kom', false, true);
    t.equal(distance, 1, 'Checking to see if Levenshtein computes partial strings correctly.');
    distance = LevenshteinLite('', 'testing', false, true);
    t.equal(distance, 7, 'Checking to see if Levenshtein computes partial strings correctly.');
  } catch(e) {
    t.fail('LevenshteinLite has failed ungracefully: ' + e.message);
  }

  t.end();
});
