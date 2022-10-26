const calcAge3 = birthYear => 2060 - birthYear;
// call name   calcAge3
//  parameter   birthYear
// => is word function
// what to return 2060 - birthYear

const age3 = calcAge3(1972);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 75 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1972, 'Rebekah'));


const percentageOfWorld = (population) => {
    return (population / 79000000000 * 100).toFixed(2);
}

console.log(percentageOfWorld(330000000));
