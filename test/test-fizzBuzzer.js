const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

  it ('should return a expected keyword or value', function(){

    const normalCases = [
      {a: 45 , expected: 'fizz-buzz'},
      {a: 25, expected: 'buzz'},
      {a: 9, expected: 'fizz'},
      {a: 7, expected: 7}
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });

  });


  it('should raise error if args not numbers', function(){
    const badInputs = [
      ['a'],
      [false],
    ];

    badInputs.forEach(function(input){
      (function(){
        fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});
