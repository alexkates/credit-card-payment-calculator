import { Payment } from './Payment';

export type PaymentSchedule = {
  monthsToPayOff: number;
  payments: Payment[];
  totalInterestPaid: number;
  totalPrincipalPaid: number;
  totalRepaymentAmount: number;
};
