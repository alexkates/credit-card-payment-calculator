import { createPaymentSchedule as sut } from './CreatePaymentSchedule';
import { CreatePaymentScheduleRequest } from './types/CreatePaymentScheduleRequest';
import { ExpectedPaymentSchedule as expectedFixPaymentSchedule } from './ExpectedFixedPaymentSchedule';
import { ExpectedPaymentSchedule as expectedVariablePaymentSchedule } from './ExpectedVariablePaymentSchedule';
import { PaymentSchedule } from './types/PaymentSchedule';

describe('createPaymentSchedule tests', () => {
  let request: CreatePaymentScheduleRequest;
  let actual: PaymentSchedule;

  describe('when payments are based on fixedPayment', () => {
    beforeAll(() => {
      request = {
        balance: 10000,
        fixedPayment: 3000,
        includePayments: true,
        interestRate: 0.219,
        minPaymentForLowBalance: 25,
        minPaymentPercentOfBalance: 0.01,
      };

      actual = sut(request);
    });

    it('should create the correct number of payments', () => {
      expect(actual.payments.length).toEqual(expectedFixPaymentSchedule.payments.length);
    });

    it('should create the correct payments', () => {
      actual.payments.forEach((actualPayment, index) => {
        expect(actualPayment).toEqual(expectedFixPaymentSchedule.payments[index]);
      });
    });
  });

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
      expect(actual.payments.length).toEqual(expectedVariablePaymentSchedule.payments.length);
    });

    it('should create the correct payments', () => {
      actual.payments.forEach((actualPayment, index) => {
        expect(actualPayment).toEqual(expectedVariablePaymentSchedule.payments[index]);
      });
    });

    it('should create the correct monthsToPayOff', () => {
      expect(actual.monthsToPayOff).toEqual(expectedVariablePaymentSchedule.monthsToPayOff);
    });

    it('should create the correct totalInterestPaid', () => {
      expect(actual.totalInterestPaid).toEqual(expectedVariablePaymentSchedule.totalInterestPaid);
    });

    it('should create the correct totalPrincipalPaid', () => {
      expect(actual.totalPrincipalPaid).toEqual(expectedVariablePaymentSchedule.totalPrincipalPaid);
    });

    it('should create the correct totalRepaymentAmount', () => {
      expect(actual.totalRepaymentAmount).toEqual(expectedVariablePaymentSchedule.totalRepaymentAmount);
    });

    it('should create the correct firstPaymentAmount', () => {
      expect(actual.firstPaymentAmount).toEqual(expectedVariablePaymentSchedule.payments[0].payment);
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
