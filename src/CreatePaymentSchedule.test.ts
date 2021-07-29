import { createPaymentSchedule as sut } from './CreatePaymentSchedule';
import { CreatePaymentScheduleRequest } from './types/CreatePaymentScheduleRequest';
import { PaymentSchedule } from './types/PaymentSchedule';
import { ExpectedPaymentSchedule as expected } from './ExpectedVariablePaymentSchedule';

describe('createPaymentSchedule tests', () => {
  let request: CreatePaymentScheduleRequest;
  let actual: PaymentSchedule;

  describe('when payments are based on minPaymentPercentOfBalance', () => {
    beforeAll(() => {
      request = {
        balance: 10000,
        includePayments: true,
        interestRate: 0.219,
        minPaymentForLowBalance: 25,
        minPaymentPercentOfBalance: 0.01,
      };

      actual = sut(request);
    });

    it('should create the correct number of payments', () => {
      expect(actual.payments.length).toEqual(expected.payments.length);
    });

    it('should create the correct payments', () => {
      actual.payments.forEach((actualPayment, index) => {
        expect(actualPayment).toEqual(expected.payments[index]);
      });
    });

    it('should create the correct monthsToPayOff', () => {
      expect(actual.monthsToPayOff).toEqual(expected.monthsToPayOff);
    });

    it('should create the correct totalInterestPaid', () => {
      expect(actual.totalInterestPaid).toEqual(expected.totalInterestPaid);
    });

    it('should create the correct totalPrincipalPaid', () => {
      expect(actual.totalPrincipalPaid).toEqual(expected.totalPrincipalPaid);
    });

    it('should create the correct totalRepaymentAmount', () => {
      expect(actual.totalRepaymentAmount).toEqual(expected.totalRepaymentAmount);
    });

    it('should create the correct firstPaymentAmount', () => {
      expect(actual.firstPaymentAmount).toEqual(expected.payments[0].payment);
    });
  });

  describe('when payments should not be included', () => {
    beforeAll(() => {
      request = {
        balance: 10000,
        includePayments: false,
        interestRate: 0.219,
        minPaymentForLowBalance: 25,
        minPaymentPercentOfBalance: 0.01,
      };

      actual = sut(request);
    });

    it('should not include the payments', () => {
      expect(actual.payments).toBeUndefined();
    });
  });
});
