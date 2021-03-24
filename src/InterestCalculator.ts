export const calculateInterest = (annualInterestRate: number, balance: number): number => {
  const monthlyInterestRate = annualInterestRate / 12;

  const interest = balance * monthlyInterestRate;

  return Math.round(interest * 100) / 100;
};
