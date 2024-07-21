import { it, expect } from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
const user = new User(testEmail);

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
