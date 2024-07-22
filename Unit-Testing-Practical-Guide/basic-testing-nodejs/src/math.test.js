import { it, expect } from "vitest";
import { add } from "./math";

it('should summarize all numbers values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue, 0
  );
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at last one invalid number is provided', () => {
  // Arrange
  const inputs = ['invalid', 2, 3];
  // Act
  const result = add(inputs);
  // Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const numbers = ['1', '2', '3'];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => parseInt(prevValue) + parseInt(curValue), 0
  );
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  // Arrange
  const numbers = [];
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  // Arrange
  const resultFn = () => { add(); };
  // Act and Assert
  expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  // Arrange
  const num1 = 1;
  const num2 = 2;
  // Act
  const resultFn = () => { add(num1, num2); }
  // Assert
  expect(resultFn).toThrow(/is not iterable/);
});
