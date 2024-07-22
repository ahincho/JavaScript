import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";
transformToNumber

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
