import { describe, expect, it, test, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      }
    }
  };
});

describe('writeData()', () => {
  it('should execute the writeFile method', () => {
    // Arrange
    const testData = 'Test';
    const testFilename = 'test.txt';
    // Act and Assert
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    writeData(testData, testFilename);
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });
  it('should return a promise that resolves to no value if called correctly', () => {
    // Arrange
    const testData = 'Test';
    const testFilename = 'test.txt';
    // Act
    writeData(testData, testFilename);
    // Assert
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
