const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
  array = input.split(' ');
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      newArray.push(array[i][0].toUpperCase() + array[i].slice(1));
    } else {
      newArray;
    }
  }
  return newArray.join(' ');
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(
  capitalizeFirstLetters('i love javaScript'),
  'I Love JavaScript'
);

assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

console.log(capitalizeFirstLetters('i am learning tdd'));
