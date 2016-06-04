'use strict';

var LevenshteinLite = require('../build');
var Tape = require('tape');

Tape('Should return 3', function(t) {

  // Basic tests
  try {
    var distance = LevenshteinLite.distance('kitten', 'sitting');
    t.equal(distance, 3, 'Checking to see if Levenshtein distance was calculated properly.')
  } catch(e) {
    t.fail('LevenshteinLite has failed ungracefully: ' + e.message)
  }

  try {
    var distance = LevenshteinLite.distance('summertime', 'spring');
    t.equal(distance, 7, 'Checking to see if Levenshtein distance was calculated properly.')
  } catch(e) {
    t.fail('LevenshteinLite has failed ungracefully: ' + e.message)
  }

  // With distance cap
  try {
    var distance = LevenshteinLite.distance('summertime', 'spring', 3);
    t.equal(distance, -1, 'Checking to see if Levenshtein distance exits early when cap is hit.')
  } catch(e) {
    t.fail('LevenshteinLite has failed ungracefully: ' + e.message)
  }

  t.end();
});
