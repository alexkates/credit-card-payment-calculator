# Credit Card Payment Calculator
> Creates a credit card repayment schedule and aggregate details such as total repayment amount, total interest to be paid, etc.

[![NPM Version][npm-image]][npm-url]
[![Build Status][github-image]][github-url]
[![Downloads Stats][npm-downloads]][npm-url]

Inspired by [Vertex 42 Credit Card Payment Calculator](https://www.vertex42.com/Calculators/credit-card-payment-calculator.html) this module creates a credit card payment schedule based on

1. balance
2. interest rate
3. minimum principal % of balance
4. minimum payment for small balances

## Installation

```sh
npm i credit-card-payment-calculator
```
## Usage example

```javascript
const { createPaymentSchedule } = require('credit-card-payment-calculator');

const schedule = createPaymentSchedule({
    balance: 10_000,
    interestRate: .219,
    minPaymentForLowBalance: 25,
    minPaymentPercentOfBalance: .01,
});

console.log(schedule);
```

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
npm i
npm test # or npm run test:watch
```
## Meta

Alex Kates – [@thealexkates](https://twitter.com/thealexkates)

Distributed under the MIT license. See ``LICENSE`` for more information.



## Contributing

1. Fork https://github.com/alexkates/credit-card-payment-calculator
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/credit-card-payment-calculator.svg
[npm-url]: https://www.npmjs.com/package/credit-card-payment-calculator
[npm-downloads]: https://img.shields.io/npm/dm/credit-card-payment-calculator.svg
[github-image]: https://github.com/alexkates/credit-card-payment-calculator/actions/workflows/node.js.yml/badge.svg
[github-url]: https://github.com/alexkates/credit-card-payment-calculator
