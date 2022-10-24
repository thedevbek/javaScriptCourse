
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMIMark1 = Math.round(massMark1 / heightMark1 ** 2);
const BMIJohn1 = Math.round(massJohn1 / heightJohn1 ** 2);
let higherBMI;
    if(BMIMark1 > BMIJohn1) {
        console.log(`Mark's BMI is higher than John's!`);
    } else {
        console.log(`Mark's BMI is the lower than John's!`);
    }

    console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})!`);