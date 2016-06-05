## [Levenshtein Lite (Minimum Edit Distance Algorithm)](https://en.wikipedia.org/wiki/Levenshtein_distance)

> A lightweight implementation of the Levenshtein distance algorithm.

Keeping things simple, lightweight, and efficient.

##### What is this?

The Levenshtein distance, also know as the minimum edit distance, is the amount of characters between two strings that would need to be changed for them to be considered equal. This can also be considered as an approximate string matching algorithm.

##### How is it implemented?

This algorithm is inspired by the dynamic programming approach and tries to conserve as much memory as possible. It's a derivation of [Wagner–Fischer algorithm](https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm), but instead of using an `n x m` matrix, memory is conserved by using two auxiliary arrays of size `n`, which act as columns within the Wagner–Fischer matrix. Here, we take advantage of the fact that the only useful data within the Wagner–Fischer matrix is the previous column and the current column. So the idea here is instead of creating an entire matrix, we only create the previous and current column, and just overwrite them as we traverse through our imaginary matrix. Doing this, we save massive amounts of memory, going from `O(nm)` memory usage all the way down to `O(2n)`, which is poetic.

##### Time & space complexity?

This particular implementation of the Levenshtein distance has an asymptotic upper bound of `O(n^2)` and uses `O(n)` space.

### Installation

Simply install the module as a [package through npm](https://www.npmjs.com/package/levenshtein-lite).

```
$ npm install levenshtein-lite --save
```

### Usage

Levenshtein Lite is a very basic module; it only consists of the actual edit distance calculation function. Simply import the package and start calculating.

```javascript
import getDistance from 'levenshtein-lite';

// Find edit distance between two strings
getDistance('summertime', 'spring'); // => 7

// Add a cap to stop calculation if edit distance is too high,
// this process will return -1 the moment we exceed the cap during
// calculation. Helps make things more efficient.
getDistance('summertime', 'spring', 5); // => -1

```

### License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2015 Nick Zuber
