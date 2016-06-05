## [Levenshtein Lite (Minimum Edit Distance Algorithm)](https://en.wikipedia.org/wiki/Levenshtein_distance) [![Build Status](https://travis-ci.org/nickzuber/levenshtein-lite.svg?branch=master)](https://travis-ci.org/nickzuber/levenshtein-lite)

> A lightweight implementation of the Levenshtein distance algorithm.

Keeping things simple, lightweight, and efficient.

#### What is this?

The Levenshtein distance, also know as the minimum edit distance, is the amount of characters between two strings that would need to be changed for them to be considered equal. This can also be considered as an approximate string matching algorithm.

#### Cool beans.. so how is it implemented?

This algorithm is inspired by the dynamic programming approach and tries to conserve as much memory as possible. It's a derivation of [Wagner–Fischer algorithm](https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm), but instead of using an `n x m` matrix, memory is conserved by using two auxiliary arrays of size `n`, which act as columns within the Wagner–Fischer matrix. Here, we take advantage of the fact that the only useful data within the Wagner–Fischer matrix is the previous column and the current column. So the idea here is instead of creating an entire matrix, we only create the previous and current column, and just overwrite them as we traverse through our imaginary matrix. Doing this, we save massive amounts of memory, going from `O(nm)` memory usage all the way down to `O(2n)`, which is poetic.

#### Alright Jack, but what's the time and space complexity?

This particular implementation of the Levenshtein distance has an asymptotic upper bound of `O(nm)` and uses `O(n)` space.

#### How fast does it actually run?

See for yourself by [checking out some benchmarks](https://github.com/nickzuber/levenshtein-lite/tree/master/benchmarks/benchmarks.log).

### Installation

Simply install the module as a [package through npm](https://www.npmjs.com/package/levenshtein-lite).

```
$ npm install levenshtein-lite --save
```

### Usage

Levenshtein Lite is a simple module; it only consists of the actual edit distance calculation function. Simply import the package and start calculating. Here's an overview on how things work.

When you import the library, you're importing this function directly so the name here is pretty arbitrary. Let's call it `levenshtein` for now:

**levenshtein**(< *string* >a, < *string* >b, [< *number* >k]) - *number* - Returns the Levenshtein edit distance between the two input strings `a` and `b`.

 - `a` - The first string argument.

 - `b` - The second string argument.

 - `k` - An optional distance cap. If the edit distance between the two input strings ever exceed this argument during the calculation, the process will terminate and `-1` will be returned. This is helpful for speeding up calculations between strings when you only care about matches within a certain edit distance.

### Examples

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
