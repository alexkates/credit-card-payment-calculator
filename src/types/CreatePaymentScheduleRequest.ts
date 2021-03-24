export type CreatePaymentScheduleRequest = {
  balance: number;
  interestRate: number;
  minPaymentPercentOfBalance: number;
  minPaymentForLowBalance: number;
};
