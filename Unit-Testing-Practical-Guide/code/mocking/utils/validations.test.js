import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validations";

describe('validateNotEmpty()', () => {
  it('should throw an error if an empty string is provided as a value', () => {
    // Arrange
    const testInput = '';
    // Act
    const validationFn = () => validateNotEmpty(testInput);
    // Assert
    expect(validationFn).toThrow();
  });
  it('should throw an error if an blank string is provided as a value', () => {
    // Arrange
    const testInput = '         ';
    // Act
    const validationFn = () => validateNotEmpty(testInput);
    // Assert
    expect(validationFn).toThrow();
  });
  it('should throw an error with the provided error message', () => {
    // Arrange
    const testInput = '';
    const testErrorMessage = 'Test Error';
    // Act
    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);
    // Assert
    expect(validationFn).toThrow(testErrorMessage);
  });
});
