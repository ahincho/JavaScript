import { it, expect, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should throw an error, if an empty string is provided', () => {
    // Arrange
    const input = '';
    // Act
    const validationFn = () => validateStringNotEmpty(input);
    // Assert
    expect(validationFn).toThrow();
  });
  it('should throw an error with a message that contains a reason (must not be empty)', () => {
    // Arrange
    const input = '';
    // Act
    const validationFn = () => validateStringNotEmpty(input);
    // Assert
    expect(validationFn).toThrow(/must not be empty/);
  });
  it('should throw an error if a long string of blanks is provided', () => {
    // Arrange
    const input = '';
    // Act
    const validationFn = () => validateStringNotEmpty(input);
    // Assert
    expect(validationFn).toThrow();
  });
  it('should throw an error if any other value than a string is provided', () => {
    // Arrange
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};
    // Act
    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);
    // Assert
    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });
  it('should not throw an error, if a non-empty string is provided', () => {
    // Arrange
    const input = 'valid';
    // Act
    const validationFn = () => validateStringNotEmpty(input);
    // Assert
    expect(validationFn).not.toThrow();
  });
});

describe('validateNumber()', () => {
  it('should throw an error if NaN is provided', () => {
    // Arrange
    const input = NaN;
    // Act
    const validationFn = () => validateNumber(input);
    // Assert
    expect(validationFn).toThrow();
  });
  it('should throw an error with a message that contains a reason (invalid number)', () => {
    // Arrange
    const input = NaN;
    // Act
    const validationFn = () => validateNumber(input);
    // Assert
    expect(validationFn).toThrow(/Invalid number/);
  });
  it('should throw an error if a non-numeric value is provided', () => {
    // Arrange
    const input = '1a';
    // Act
    const validationFn = () => validateNumber(input);
    // Assert
    expect(validationFn).toThrow();
  });
  it('should not throw an error, if a number is provided', () => {
    // Arrange
    const input = 1;
    // Act
    const validationFn = () => validateNumber(input);
    // Assert
    expect(validationFn).not.toThrow();
  });
});
