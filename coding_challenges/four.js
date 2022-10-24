
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
console.log(`The bill was ${bill} and the tip was ${tip}, and the total value ${bill + tip}`);

const hour = 20;
const time = hour < 18 ? `Good Day` : `Good Evening`;
console.log(time);

const number = -8;

const check = number > 0 ? `Number is positive` : `Number is negative`;
console.log(check);

num = 5;

const driversLicense = num >= 16 ? `I can drive!` : `I cannot drive!`;
console.log(driversLicense)