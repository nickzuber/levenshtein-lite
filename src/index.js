'use strict';

import distance from './lib/levenshtein-lite.js';

const LevenshteinLite = {};
LevenshteinLite.distance = distance;

export default LevenshteinLite;
