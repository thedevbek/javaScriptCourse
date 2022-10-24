//# conversion changes data type manually
//# and then coercion is done automatically by JavaScript.

//Type conversions
const inputYear = '1991'; //still a string
console.log(Number(inputYear), inputYear); //the number function will 
//return a number not a string.
console.log(inputYear + 18); //string and a number
console.log(Number(inputYear) + 18); //this will add

// # You can also change a number to a string
console.log(String(68), 68);

// type coercion

console.log(`I am ${50} years old.`); //# JavaScript changed the number
//# 50 to a string so it would print

console.log('23' - '10' - 3); //# JavaScript convert String to
//# numbers because of the minus sign
console.log('23' + '10' + 3); //this is concatenated with + sign.

console.log( '9' - '5');//4
console.log('19' - '13' + '17');//concatenated
console.log('19' - '13' + 17);//23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2);//1143 was concatenated after all possible math was done!