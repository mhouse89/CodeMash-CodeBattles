#romannumerals_spec
require './lib/romannumerals'

describe "Roman Numerals" do

  before(:each) do
    @roman = RomanNumeral.new
  end

  context "wacky romans didn't do 0" do
    it "should not convert zero" do
      @roman.convert(0).should == ""
    end
  end

  context "convert base symbols (I, V, X, L, C)" do
    it "should convert number 1 to numeral I" do
      @roman.convert(1).should == "I"
    end
    it "should convert number 5 to numeral V" do
      @roman.convert(5).should == "V"
    end
    it "should convert number 10 to numeral X" do
      @roman.convert(10).should == "X"
    end
    it "should convert number 50 to numeral L" do
      @roman.convert(50).should == "L"
    end
    it "should convert number 100 to numeral C" do
      @roman.convert(100).should == "C"
    end

  end

  context "convert additions" do
    it "should convert number 2 to numeral II" do
      @roman.convert(2).should == "II"
    end

    it "should convert number 3 to numeral III" do
      @roman.convert(3).should == "III"
    end

    it "should convert number 8 to numeral VIII" do
      @roman.convert(8).should == "VIII"
    end
    it "should convert number 27 to numeral XXVII" do
      @roman.convert(27).should == "XXVII"
    end

  end

  context "convert subtractions" do
    it "should convert number 4 to numeral IV" do
      @roman.convert(4).should == "IV"
    end
    it "should convert number 9 to numeral IX" do
      @roman.convert(9).should == "IX"
    end
    it "should convert number 40 to numeral XL" do
      @roman.convert(40).should == "XL"
    end
    it "should convert number 44 to numeral XLIV" do
      @roman.convert(44).should == "XLIV"
    end


  end
end
