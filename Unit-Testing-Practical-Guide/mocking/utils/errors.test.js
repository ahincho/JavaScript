import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe('HttpError', () => {
  it('should contain the provided status coide, message and data', () => {
    // Arrange
    const testStatus = 1;
    const testMessage = 'Test';
    const testData = { key: 'testing' };
    // Act
    const testError = new HttpError(testStatus, testMessage, testData);
    // Assert
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });
  it('should contain undefined as data if no data is provided', () => {
    // Arrange
    const testStatus = 1;
    const testMessage = 'Test';
    // Act
    const testError = new HttpError(testStatus, testMessage);
    // Assert
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe('ValidationError', () => {
  it('should contain the provided message', () => {
    // Arrange
    const testMessage = 'Test';
    // Act
    const testError = new ValidationError(testMessage);
    // Assert
    expect(testError.message).toBe(testMessage);
  });
});
