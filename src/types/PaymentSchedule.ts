import { Payment } from './Payment';

export type PaymentSchedule = {
  firstPaymentAmount: number;
  monthsToPayOff: number;
  payments?: Payment[];
  totalInterestPaid: number;
  totalPrincipalPaid: number;
  totalRepaymentAmount: number;
};
