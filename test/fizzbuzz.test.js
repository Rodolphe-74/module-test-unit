import {fizzBuzz} from "../src/fizzbuzz";
import {multiply} from "../src/multiply";

describe('fizzbuzz',() => {
  it('should return fizz on multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
  });

  it('should return buzz on multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
  });

  it('should return fizzbuzz on multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
  });

  it('should return fizz if contains 3', () => {
    expect(fizzBuzz(13)).toBe('fizz');
    expect(fizzBuzz(31)).toBe('fizz');
  });

  it('should return fizz if contains 5', () => {
    expect(fizzBuzz(52)).toBe('buzz');
  });

  it('should return fizz if contains 3 and 5', () => {
    expect(fizzBuzz(53)).toBe('fizzbuzz');
  });
});
