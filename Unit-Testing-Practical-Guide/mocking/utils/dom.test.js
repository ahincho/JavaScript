import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import fs from "fs";
import path from "path";
import { showError } from "./dom";
import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

describe('showError()', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocContent);
  });
  it('should add an error paragraph to the id="errors" element', () => {
    // Arrange and Act
    showError('Test');
    const error = document.getElementById('errors');
    const errorParagraph = error.firstElementChild;
    // Assert
    expect(errorParagraph).not.toBeNull();
  });
  it('should not contain an error paragraph initially', () => {
    // Arrange and Act
    const error = document.getElementById('errors');
    const errorsParagraph = error.firstElementChild;
    // Assert
    expect(errorsParagraph).toBeNull();
  });
  it('should output the provided message in the error paragraph', () => {
    // Arrange and Act
    const testErrorMessage = 'Test';
    showError(testErrorMessage);
    const error = document.getElementById('errors');
    const errorParagraph = error.firstElementChild;
    // Assert
    expect(errorParagraph.textContent).toBe(testErrorMessage);
  });
});
