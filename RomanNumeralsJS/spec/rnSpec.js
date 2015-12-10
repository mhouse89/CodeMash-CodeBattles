describe('Roman Numerals', function() {
  //var romanNumerals = require('./lib/rn.js');
  var numerals;

  beforeEach(function() {
    numerals = new romanNumerals();
  });

  it('translates 1 to I', function(){
  	expect(numerals.arabicToRoman(1)).toEqual('I')
  });

  it('translates 2 to II', function(){
  	expect(numerals.arabicToRoman(2)).toEqual('II')
  });

  it('translates 4 to IV', function(){
  	expect(numerals.arabicToRoman(4)).toEqual('IV')
  });

  it('translates 5 to V', function(){
  	expect(numerals.arabicToRoman(5)).toEqual('V')
  });

  it('translates 6 to VI', function(){
  	expect(numerals.arabicToRoman(6)).toEqual('VI')
  });

  it('translates 9 to IX', function(){
  	expect(numerals.arabicToRoman(9)).toEqual('IX')
  });

  it('translates 37 to XXXVII', function(){
  	expect(numerals.arabicToRoman(37)).toEqual('XXXVII')
  });

  it('translates 345 to CCCXLV', function(){
  	expect(numerals.arabicToRoman(345)).toEqual('CCCXLV')
  });

  it('translates 467 to CDLXVII', function(){
  	expect(numerals.arabicToRoman(467)).toEqual('CDLXVII')
  });  

  it('translates 858 to DCCCLVIII', function(){
  	expect(numerals.arabicToRoman(858)).toEqual('DCCCLVIII')
  });

  it('translates 274 to CCLXXIV', function(){
  	expect(numerals.arabicToRoman(274)).toEqual('CCLXXIV')
  });  

  it('translates 1692 to MDCXCII', function(){
  	expect(numerals.arabicToRoman(1692)).toEqual('MDCXCII')
  });

});
