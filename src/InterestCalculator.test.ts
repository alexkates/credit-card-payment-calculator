import { calculateInterest as sut } from './InterestCalculator';

describe('calculateInterest tests', () => {
  describe.each([
    [0, 0, 0],
    [10_000, 0.219, 182.5],
    [10_001, 0.219, 182.52],
  ])('when balance=%s, interestRate=%s', (balance, interestRate, expected) => {
    it(`should calculate interest to be ${expected}`, () => {
      const actual = sut(balance, interestRate);

      expect(actual).toEqual(expected);
    });
  });
});
