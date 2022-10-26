
function logger() {
    console.log('My name is Bek');
}
// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    return `Juice with ${apples} apples and ${oranges} oranges.`;
}
const appleJuice = fruitProcessor(3,7);
console.log(appleJuice);


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}


let status = describeCountry('USA', 330, 'Washington D.C.');
console.log(status);
status = describeCountry('England', 69, 'London');
console.log(status);
status = describeCountry('Mexico', 129, 'Mexico City');
console.log(status);