import { it, expect, beforeEach, beforeAll, afterAll, afterEach, describe } from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
let user = new User(testEmail);

beforeAll(() => {
  console.log('Before All Function');
});

beforeEach(() => {
  user = new User(testEmail);
  console.log('Before Each Function');
});

afterAll(() => {
  console.log('After All Function');
});

afterEach(() => {
  console.log('After Each Function');
});

describe.concurrent('User', () => {
  it('should update the email', () => {
    // Arrange
    const newTestEmail = 'test2@test.com';
    // Act
    user.updateEmail(newTestEmail);
    // Assert
    expect(user.email).toBe(newTestEmail);
  });
  it('should have an email property', () => {
    // Arrange
    // Act
    // Assert
    expect(user).toHaveProperty('email');
  });
  it('should store the provided email value', () => {
    // Arrange
    // Act
    user = new User(testEmail);
    // Assert
    expect(user.email).toBe(testEmail);
  });
  it('should clear the email', () => {
    // Arrange
    // Act
    user.clearEmail();
    // Assert
    expect(user.email).toBe('');
  });
  it('should still have an email property after clearing the email', () => {
    // Arrange
    // Act
    user.clearEmail();
    // Assert
    expect(user).toHaveProperty('email');
  });
})
