package kataBattle.fizzbuzz

import org.junit.Test

class FizzBuzzTest {

  @Test
  void "returns the number it is handed"() {
    assert(FizzBuzz.process(1) == 1)
  }

  @Test
  void "returns the other numbers it is handed"() {
    assert(FizzBuzz.process(2) == 2)
  }
  @Test
  void "returns fizz for multiples of 3"() {
    assert(FizzBuzz.process(3) == "Fizz")
  }
  @Test
  void "returns fizz for other multiples of 3"() {
    assert(FizzBuzz.process(6) == "Fizz")
  }
  @Test
  void "returns buzz for multiples of 5"() {
    assert(FizzBuzz.process(5) == "Buzz")
  }
  @Test
  void "returns buzz for other multiples of 5"() {
    assert(FizzBuzz.process(10) == "Buzz")
  }
}
