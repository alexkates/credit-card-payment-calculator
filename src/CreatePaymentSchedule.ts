import { createPayment } from './CreatePayment';
import { CreatePaymentScheduleRequest } from './types/CreatePaymentScheduleRequest';
import { Payment } from './types/Payment';
import { PaymentSchedule } from './types/PaymentSchedule';
import { round } from './Round';

export const createPaymentSchedule = (request: CreatePaymentScheduleRequest): PaymentSchedule => {
  const payments: Payment[] = [];

  const {
    balance: startingBalance,
    fixedPayment,
    interestRate,
    minPaymentForLowBalance,
    minPaymentPercentOfBalance,
  } = request;

  const firstPayment = createPayment(
    startingBalance,
    fixedPayment,
    interestRate,
    minPaymentForLowBalance,
    minPaymentPercentOfBalance,
  );
  payments.push(firstPayment);

  let remainingBalance = firstPayment.balance;
  while (remainingBalance > 0) {
    const payment = createPayment(
      remainingBalance,
      fixedPayment,
      interestRate,
      minPaymentForLowBalance,
      minPaymentPercentOfBalance,
    );
    payments.push(payment);

    remainingBalance = payment.balance;
  }

  const firstPaymentAmount = payments[0].payment;
  const monthsToPayOff = payments.length;
  const totalInterestPaid = round(payments.reduce((sum, p) => sum + p.interest, 0));
  const totalPrincipalPaid = round(payments.reduce((sum, p) => sum + p.principal, 0));
  const totalRepaymentAmount = round(totalInterestPaid + totalPrincipalPaid);

  const paymentSchedule: PaymentSchedule = {
    firstPaymentAmount,
    monthsToPayOff,
    totalInterestPaid,
    totalPrincipalPaid,
    totalRepaymentAmount,
  };

  if (request.includePayments === true) paymentSchedule.payments = payments;

  return paymentSchedule;
};
