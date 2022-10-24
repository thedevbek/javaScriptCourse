const age1 = 14;

if (age1 >=16) {
    console.log(`Bek can start driving! 🏎`);
} else { 
    const yearsLeft = age1 - 16;
    console.log(`Bek can not drive yet! 🛑 Wait another ${yearsLeft} years!`);
}

const birthYears = 1972;
let century;
if(birthYears <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century)


if(country >= averagePopulation) {
    console.log(`${country} is above average.`);
} else {
    console.log(`${country} is not above average.`);
}