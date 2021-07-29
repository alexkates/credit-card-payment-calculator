import { Payment } from './types/Payment';
import { round } from './Round';

export const createPayment = (
  balance: number,
  fixedPayment: number,
  interestRate: number,
  minPaymentForLowBalance: number,
  minPaymentPercentOfBalance: number,
): Payment => {
  const interest = (interestRate / 12) * balance;

  const minimumPayment = minPaymentPercentOfBalance * balance + interest;
  const maximumPayment = Math.max(minimumPayment, minPaymentForLowBalance);

  const payment = Math.min(fixedPayment ?? maximumPayment, balance + interest);

  const principal = payment - interest;
  const newBalance = balance - principal;

  return {
    balance: round(newBalance),
    interest: round(interest),
    interestRate,
    payment: round(payment),
    principal: round(principal),
  };
};
