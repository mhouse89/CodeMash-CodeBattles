describe('When FizzBuzz is given a value: ', function(){

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  // describe('when a number is divisible', function(){
  //
  //   it('by 3', function(){
  //     expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  //   });
  //
  //   it('by 5', function(){
  //     expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  //   });
  //
  //   it('by 15', function(){
  //     expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
  //   });
  //
  // });
  //
  // describe('when a number is not divisible', function(){
  //
  //   it('by 3', function(){
  //     expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  //   });
  //
  //   it('by 5', function(){
  //     expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
  //   });
  //
  //   it('by 15', function(){
  //     expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
  //   });
  // });

  describe('convert returns', function(){

    it('"Fizz" when the number is divisible by 3', function(){
      expect(fizzbuzz.convert(3)).toEqual("Fizz");
    });

    it('"Buzz" when the number is divisible by 5', function(){
      expect(fizzbuzz.convert(5)).toEqual("Buzz");
    });

    it('"FizzBizz" when the number is divisible by 15', function(){
      expect(fizzbuzz.convert(15)).toEqual("FizzBuzz");
    });

    it('the number given when it is not divisible by 3, 5 or 15', function(){
      expect(fizzbuzz.convert(1)).toEqual(1)
    });
  });


});
