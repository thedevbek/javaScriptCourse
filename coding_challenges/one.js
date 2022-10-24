//# Data source one
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = Math.round(massMark / heightMark ** 2);
const BMIJohn = Math.round(massJohn / heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI)

// # Data source two
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 80;
const heightJohn2 = 1.76;

const BMIMark2 = Math.round(massMark2 / heightMark2 ** 2);
const BMIJohn2 = Math.round(massJohn2 / heightJohn2 ** 2);
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(BMIMark2, BMIJohn2);
console.log(markHigherBMI2)