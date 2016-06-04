'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _levenshteinLite = require('./lib/levenshtein-lite.js');

var _levenshteinLite2 = _interopRequireDefault(_levenshteinLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LevenshteinLite = {};
LevenshteinLite.distance = _levenshteinLite2.default;

exports.default = LevenshteinLite;
module.exports = exports['default'];