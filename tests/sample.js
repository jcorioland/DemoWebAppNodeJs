var assert = require('assert');

describe('Array', function() {
  describe('testCalculatorServiceAdd', function () {
    it('should return the sum of two numbers', function () {
      var a= 10;
      var b = 5;
      var expected = 15;
      var actual = a + b;
      assert.equal(actual, expected);
    });
  });
});