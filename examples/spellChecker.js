'use strict';

const fs = require('fs');
const wordListPath = require('word-list');
const distance = require('../build');

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var input = 'believe';

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const CAP = 3;
const MAX_SUGGESTIONS = 4;
var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

if (!wordArray.indexOf(input) > -1) {
  console.log(`Could not find word '${input}'.`);
  let err = '                     ';
  input.split('').map(e => err += '^');
  console.log(err);

  var potentialWords = [];

  var start = new Date().getTime();
  for (let i = 0; i < wordArray.length; ++i) {
    let d = distance(input, wordArray[i], 3);
    if (d > 0) {
      potentialWords.push({
        value: d,
        word: wordArray[i]
      });
    }
  }
  var end = new Date().getTime();

  if (potentialWords.length) {
    console.log('Did you mean:\n')
    potentialWords.sort((a, b) => a.value - b.value).slice(0, MAX_SUGGESTIONS).map(e => console.log('  ' + e.word));
    console.log(`\n>> Showing top ${MAX_SUGGESTIONS} suggestions from ${potentialWords.length.toLocaleString()} that were found from searching ${wordArray.length.toLocaleString()} total words.`);
    console.log(`>> Word suggestion took ~${(end-start)/1000} seconds.`);
  } else {
    console.log('No suggestions found.')
  }
} else {
  console.log(`'${input}' is a valid word.`);
}
