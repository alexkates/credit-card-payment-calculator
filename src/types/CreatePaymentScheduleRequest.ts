export type CreatePaymentScheduleRequest = {
  /**
   * The current credit card balance.
   * e.g., 10000
   */
  balance: number;

  /**
   * The annualized interest rate.
   * e.g., .129
   */
  interestRate: number;

  /**
   * The percent of balance that makes up the principal portion.
   * of the payment
   * e.g., .01
   */
  minPaymentPercentOfBalance: number;

  /**
   * When the balance drops below this number, use this as the payment.
   * e.g., 25
   */
  minPaymentForLowBalance: number;
};
