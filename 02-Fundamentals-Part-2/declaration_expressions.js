// ? declarations function


function calcAge1(birthYear) {
    return 2040 - birthYear;
}

const age1 = calcAge1(1972); //! call before defined!
console.log(age1);





//! expression functions also called an anonymous function, functions
//! are just value and can be stored in a variable
//? expression functions can not be called before they are defined
const calAge2 = function(birthYear) {
    return 2050 - birthYear;
}

const age2 = calAge2(1972);
console.log(age2);




function percentageOfWorld(population) {

    return (population / 79000000000 * 100).toFixed(2);
}

const population1 = percentageOfWorld(330000000);
console.log(population1)

const population2 = percentageOfWorld(56000000);
console.log(population2);

const population3 = percentageOfWorld(1400000000);
console.log(population3);

const percentageOfWorld2 = function (population) {

    return (population / 79000000000 * 100).toFixed(2);
}

const population4 = percentageOfWorld2(330000000);
console.log(population4);

const population5 = percentageOfWorld2(56000000);
console.log(population5);

const population6 = percentageOfWorld2(1400000000);
console.log(population6);
















