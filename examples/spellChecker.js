'use strict';

const fs = require('fs');
const wordListPath = require('word-list');
const distance = require('../build');

const CAP = 3;
var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

var input = 'faverite';

if (!wordArray.indexOf(input) > -1) {
  console.log(`Could not find word '${input}'.`);
  let err = '                     ';
  input.split('').map(e => err += '^');
  console.log(err);

  var potentialWords = [];

  for (let i = 0; i < wordArray.length; ++i) {
    let d = distance(input, wordArray[i], 2);
    if (d > 0) {
      potentialWords.push({
        value: d,
        word: wordArray[i]
      });
    }
  }

  if (potentialWords.length) {
    console.log('\nDid you mean:\n')
    potentialWords.sort((a, b) => a.value - b.value).slice(0, 10).map(e => console.log(e.word));
  } else {
    console.log('\nNo suggestions found.')
  }
} else {
  console.log(`'${input}' is a valid word.`);
}
