import { createPaymentSchedule as sut } from './CreatePaymentSchedule';
import { CreatePaymentScheduleRequest } from './types/CreatePaymentScheduleRequest';
import { PaymentSchedule } from './types/PaymentSchedule';
import { ExpectedPaymentSchedule as expected } from './expectedPaymentSchedule';

describe('createPaymentSchedule tests', () => {
  let request: CreatePaymentScheduleRequest;
  let actual: PaymentSchedule;

  beforeAll(() => {
    request = {
      balance: 10000,
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

  it('should create the correct payment schedule meta data', () => {
    expect(actual.monthsToPayOff).toEqual(expected.monthsToPayOff);
    expect(actual.totalInterestPaid).toEqual(expected.totalInterestPaid);
    expect(actual.totalPrincipalPaid).toEqual(expected.totalPrincipalPaid);
    expect(actual.totalRepaymentAmount).toEqual(expected.totalRepaymentAmount);
  });
});
