import { describe, expect, it, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      }
    }
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
  it('should return any available response data', () => {
    // Arrange
    const testData = { key: 'test' };
    // Act
    sendDataRequest(testData);
    // Assert
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });
  it('should convert the provided data to JSON before sending the request', async () => {
    // Arrange
    const testData = { key: 'test' };
    let errorMessage;
    try {
      // Act and Assert
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }
    expect(errorMessage).not.toBe('Not a string');
  });
  it('should throw an HttpError in case of non-ok responses', () => {
    // Arrange
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
          return reject('Not a string');
        }
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          }
        }
        resolve(testResponse);
      });
    });
    const testData = { key: 'test' };
    // Act and Assert
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
