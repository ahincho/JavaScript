import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async.token";

describe('generateToken()', () => {
  it('should generate a token value', () => {
    return new Promise((resolve, reject) => {
      // Arrange
      const userEmail = 'test@test.com';
      // Act
      generateToken(userEmail, (error, token) => {
        // Assert
        try {
          expect(token).toBeDefined();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  });
});

describe('generateTokenPromise()', () => {
  it('should generate a token value', () => {
    // Arrange
    const userEmail = 'test@test.com';
    // Act and Assert
    return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
  });
  it('should generate a token value', async () => {
    // Arrange
    const userEmail = 'test@test.com';
    // Act
    const token = generateTokenPromise(userEmail);
    // Assert
    expect(token).toBeDefined();
  });
});
