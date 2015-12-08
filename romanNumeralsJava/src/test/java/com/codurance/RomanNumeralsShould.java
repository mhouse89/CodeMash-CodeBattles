package com.codurance;

import org.junit.Test;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class RomanNumeralsShould {
    @Test public void
    convert_arabic_to_roman_value() {
        // assertThat(RomanNumerals.convert(1), is("I"));
        // assertThat(RomanNumerals.convert(2), is("II"));
        // assertThat(RomanNumerals.convert(3), is("III"));
        // assertThat(RomanNumerals.convert(4), is("IV"));
        // assertThat(RomanNumerals.convert(5), is("V"));
        // assertThat(RomanNumerals.convert(6), is("VI"));
        // assertThat(RomanNumerals.convert(10), is("X"));
        // assertThat(RomanNumerals.convert(20), is("XX"));
        // assertThat(RomanNumerals.convert(54), is("LIV"));
    }

    @Test
    public void canConvertOneIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(1), is("I"));
    }

    @Test
    public void canConvertTwoIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(2), is("II"));
    }

    @Test
    public void canConvertThreeIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(3), is("III"));
    }

    @Test
    public void canConvertFourIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(4), is("IV"));
    }

    @Test
    public void canConvertFiveIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(5), is("V"));
    }

    @Test
    public void canConvertSixIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(6), is("VI"));
    }

    @Test
    public void canConvertSevenIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(7), is("VII"));
    }

    @Test
    public void canConvertEightIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(8), is("VIII"));
    }

    @Test
    public void canConvertNineIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(9), is("IX"));
    }

    @Test
    public void canConvertTenIntoRomanNumerals () {
      assertThat(RomanNumerals.convert(10), is("X"));
    }


}
