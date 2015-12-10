function romanNumerals() {
  this.roman = '';
  this.ARABICS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  this.ROMANS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
}

romanNumerals.prototype.arabicToRoman = function(arabic){
	var remainder = arabic;

	for (var i = 0; i < this.ARABICS.length; i++){
		remainder = this.appendNumerals(remainder, this.ARABICS[i], this.ROMANS[i]);
	}

	return this.roman;
};

romanNumerals.prototype.appendNumerals = function(value, number, letters){
	while (value >= number){
		this.roman += letters;
		value -= number;
	}
	return value;
};


//module.exports = romanNumerals;