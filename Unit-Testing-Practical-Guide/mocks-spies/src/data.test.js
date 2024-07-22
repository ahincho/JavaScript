import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    // Arrange
    const logger = vi.fn();
    // logger.mockImplementationOnce(() => {});
    // Act
    generateReportData(logger);
    // Assert
    expect(logger).toBeCalled();
  });
});
