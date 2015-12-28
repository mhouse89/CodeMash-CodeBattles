describe('When FizzBuzz is given a value: ', function(){

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('convert returns', function(){

    it('the number given when it is not divisible by 3, 5 or 15', function(){
      expect(fizzbuzz.convert(1)).toEqual(1)
    });
  });


});
