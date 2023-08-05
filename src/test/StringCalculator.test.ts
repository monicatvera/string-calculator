//import { calculate } from "../core/stringCalculator";

export function sumNumbers(expression: string) {
    if (!expression) {
      return 0;
    }

    if (expression.includes(',')) {
      const tokens = expression.split(',');
      return tokens
        .map((token) => Number(token))
        .reduce((previousNumber, currentNumber) => previousNumber + currentNumber);
    }

    return Number(expression);
  }

describe('The string calculator', () => {
    it('does not increment the total in case of null or empty expression', () => {
        expect(sumNumbers(null)).toBe(0);
        expect(sumNumbers('')).toBe(0);
    });

    it('converts number in strings to number type', () => {
        expect(sumNumbers('1')).toBe(1);
    });

    it('sums all numbers separated by commas', () => {
        expect(sumNumbers('1,2')).toBe(3);
        expect(sumNumbers('1,2,3')).toBe(6);
    });
})