const age = 50;
age >= 18 ? console.log(`I can drink!`) : console.log(`I can not drink!`);
//! condition ? if condition : else condition
//? This is an operator (is an expression), and they always produce a value! We can assign values to variables!!

const drink = age >= 18 ? `I can drink!` : `I can not drink!`;
console.log(drink);

//! We can put ternary operators inside template literals!

console.log(` I like to drink, ${age >= 18 ? 'I can drink!' : 'I can not drink!'}`);

const population = 444;
population >= 330 ? console.log(`above average`) : console.log(`below average`);
