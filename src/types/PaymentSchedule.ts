import { Payment } from './Payment';

export type PaymentSchedule = {
  /**
   * The total payment due for the first payment in the schedule.
   * e.g., 282.50
   */
  firstPaymentAmount: number;

  /**
   * Total number of payments until the balance is paid off in full.
   * e.g., 299
   */
  monthsToPayOff: number;

  /**
   * The acutal payments that make up the complete schedule.
   */
  payments?: Payment[];

  /**
   * Total interest to be paid over the lifetime of the schedule.
   * e.g., 17185.56
   */
  totalInterestPaid: number;

  /**
   * Total principal to be paid over the lifetime of the schedule.
   * e.g., 10000.00
   */
  totalPrincipalPaid: number;

  /**
   * Total amount (interest and principal) to be paid over the lifetime of the schdule.
   * e.g., 27185.56
   */
  totalRepaymentAmount: number;
};
