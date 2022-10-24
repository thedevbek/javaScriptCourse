//! Math operators
const now = 2037;
const ageJohansson = now - 1972;
const ageSarah = now - 2018;
console.log(ageJohansson, ageSarah);

console.log(ageJohansson * 2, ageJohansson / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Bek";
const lastName = "Johansson";
console.log(firstName + " " + lastName);

//! assignment operator
// = is an assignment operator
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 adds 1 to x
x--; //x = x - 1 subtracts 1 from x
x--;

console.log(x);

//! comparison operator
console.log(ageJohansson > ageSarah);
// >, <, >=, <=
console.log(ageSarah >= 21);
console.log(now - 1991 > now - 2018);

//! operator precedence

const averageAge = (ageJohansson + ageSarah) / 2;
console.log(averageAge);

// let country = 'United States';
// let continent = 'North America';
// let population = 330;

// halfCountry = population / 2;
// increaseCountry = population + 1;
// console.log(halfCountry);
// console.log(increaseCountry);
// finlandCountry = 'Finland';
// finlandPopulation = 6;
// console.log(finlandCountry <= country);
// averagePopulation = 33;
// console.log(averagePopulation >= population);
// country = 'Portugal';
// continent = 'Europe';
// population = 11;
// language = 'Portuguese'
// description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.';
// console.log(description);

//!boolean operators are "&& is and " and "|| is or" and "! is not"

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Sarah is not able to drive!`);
}

const isTired = true;
console.log(hasGoodVision && !isTired && hasDriversLicense);


//! Equality operator
//? = assigns things, === 3 = means DOES NOT do type coercion, == 2 means  does
//? type coercion example '68' == 68; = true!
//! When comparing use === as much as possible!


// const favourite = prompt('What is your favourite number?')
// console.log(typeof favourite);
// console.log(favourite);
//
// if (favourite === 68) {
//     console.log('You are a favourite!');
// }
//
// if (favourite !== 68) { //! !== is a not! Different operator
//     console.log('I miss my girl!');
// }

// const numNeighbours = prompt('How many neighbour countries does your country have?');
//
// if(numNeighbours == 1) {
//     console.log('Only 1 border!');
// } else if(numNeighbours > 1) {
//     console.log('More than 1 border!')
// } else {
//     console.log('You have no borders!');
// }

let population = 345;
let language = 'Spanish';

console.log(language, population);

if (language === 'English' && population > 200) {
    console.log('Good country');
} else {
    console.log('Bad country');
}








