
var assert = require('assert');

function digit2number(letter) {

    if (letter == 'I') return 1;
    if (letter == 'V') return 5;
    if (letter == 'X') return 10;
    if (letter == 'L') return 50;
    if (letter == 'C') return 100;
    if (letter == 'D') return 500;
    if (letter == 'M') return 1000;

}

function romanNumber(str) {

    var result = 0;
    for ( var i=0 ; i<str.length; i++) {

        // convert current letter to number
        var letter = str[i];
        var currentNumber = digit2number(letter);
        
        var nextPos = i+1;
        if (nextPos < str.length) {
          var nextLetter = str[nextPos];
          var nextNumber = digit2number(nextLetter);


          if (nextNumber > str.length) {
             currentNumber = currentNumber*-1 
          }
        
        }

        
        result += currentNumber;
    }
    return result;
}

describe('roman numbers', function () {
    it('letter I should be 1', function () {

        // given

        var letter = 'I';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 1);
    });
    it('letter V should be 5', function () {

        // given

        var letter = 'V';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 5);
    });
    it('letter X should be 10', function () {

        // given

        var letter = 'X';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 10);
    });
    it('letter L should be 50', function () {

        // given

        var letter = 'L';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 50);
    });
    it('letter C should be 100', function () {

        // given

        var letter = 'C';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 100);
    });
    it('letter D should be 500', function () {

        // given

        var letter = 'D';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 500);
    });
    it('letter M should be 1000', function () {

        // given

        var letter = 'M';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 1000);
    });
    it('symbol followed by bigger number', function () {

        // given

        var letter = 'XIX';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 19);
    });

});