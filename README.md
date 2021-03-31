# Credit Card Payment Calculator

[![NPM Version][npm-image]][npm-url]
[![Build Status][github-image]][github-url]
[![Downloads Stats][npm-downloads]][npm-url]

Inspired by [Vertex 42 Credit Card Payment Calculator](https://www.vertex42.com/Calculators/credit-card-payment-calculator.html) this module creates a credit card payment schedule. This is useful when trying to understand the total cost with paying off a credit card while making minimum payments.

- [Credit Card Payment Calculator](#credit-card-payment-calculator)
- [Installation](#installation)
- [Usage](#usage)
  - [CommonJS](#commonjs)
  - [ESM](#esm)
  - [Request Object](#request-object)
  - [Response Object](#response-object)
- [Develop](#develop)
- [Contributing](#contributing)
- [Meta](#meta)

# Installation

```sh
npm i credit-card-payment-calculator
```
# Usage
## CommonJS

```javascript
const { createPaymentSchedule } = require('credit-card-payment-calculator');

const schedule = createPaymentSchedule({
    balance: 10000,
    interestRate: .219,
    includePayments: true,
    minPaymentForLowBalance: 25,
    minPaymentPercentOfBalance: .01,
});

console.log(schedule);
```

## ESM
```javascript
import { createPaymentSchedule } from 'credit-card-payment-calculator';

const schedule = createPaymentSchedule({
    balance: 10000,
    interestRate: .219,
    includePayments: true,
    minPaymentForLowBalance: 25,
    minPaymentPercentOfBalance: .01,
});

console.log(schedule);

```

## Request Object
```javascript
export type CreatePaymentScheduleRequest = {
  /**
   * The current credit card balance.
   * e.g., 10000
   */
  balance: number;

  /**
   * Set to true to include all payments.
   * Defaults to false.
   */
  includePayments?: boolean;

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

```

## Response Object
```javascript
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
```
# Develop

```sh
npm i
npm test # or npm run test:watch
```
# Contributing

1. Fork https://github.com/alexkates/credit-card-payment-calculator
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Bump the SemVer (`npm version major|minor|patch`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

<!-- Markdown link & img definitions -->
[npm-image]: https://img.shields.io/npm/v/credit-card-payment-calculator.svg
[npm-url]: https://www.npmjs.com/package/credit-card-payment-calculator
[npm-downloads]: https://img.shields.io/npm/dm/credit-card-payment-calculator.svg
[github-image]: https://github.com/alexkates/credit-card-payment-calculator/actions/workflows/node.js.yml/badge.svg
[github-url]: https://github.com/alexkates/credit-card-payment-calculator

# Meta
Alex Kates – [@thealexkates](https://twitter.com/thealexkates)

Distributed under the MIT license. See [this license file](./LICENSE) for more information.
