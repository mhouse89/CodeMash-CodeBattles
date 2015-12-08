class Fizzbuzz

	def calc ( number )
		num = number
		output = num
		output = 'Fizz' if num % 3 == 0
		output = 'Buzz' if num % 5 == 0
		output = 'FizzBuzz' if num % 15 == 0

		output
	end
end
