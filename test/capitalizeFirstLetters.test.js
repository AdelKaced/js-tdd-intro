const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('capitalizeFirstLetters is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it('capitalizeFirstLetters transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('i love javaScript'),'I Love JavaScript');
  });
  it('works with one word', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');    
  });
  it('works with one letter', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');    
  });
  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');    
  });
});

