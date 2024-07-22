import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";
transformToNumber

describe('transformToNumber()', () => {
  it('should transform a string number to a number of type number', () => {
    // Arrange
    const input = '1';
    // Act
    const result = transformToNumber(input)
    // Assert
    expect(result).toBeTypeOf('number');
    expect(result).toBe(+input);
  });
  it('should yield NaN for non string numbers', () => {
    // Arrange
    const input = 'invalid number';
    const object = {};
    // Act
    const result1 = transformToNumber(input);
    const result2 = transformToNumber(object);
    // Assert
    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
  });
  it('should transform a string negative number to a negative number of type number', () => {
    // Arrange
    const input = '-1';
    // Act
    const result1 = transformToNumber(input);
    // Assert
    expect(result1).toBe(+input);
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    // Arrange
    const numberValues = ['1', '2', '3'];
    // Act
    const cleanedNumbers = cleanNumbers(numberValues);
    // Assert
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });
  it('should thrown an error if an array with at least one empty string is provided', () => {
    // Arrange
    const numberValues = ['', 2, 3];
    // Act
    const cleanFn = () => cleanNumbers(numberValues);
    // Assert
    expect(cleanFn).toThrow();
  });
});
