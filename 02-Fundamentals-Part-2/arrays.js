
const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends[1])

console.log(friends.length)

//the minus 1 is to get the last item in the array.
//don't forget to call the function then call the length -1
console.log(friends[friends.length - 1])
// const years = new Array(1991, 1984, 2008, 2022);
//! Arrays can be written like this but IDE is like nope


friends[0] = 'Thomas';
console.log(friends);

firstName = 'Bek'
const bek = [firstName, 'Johansson', 2037 - 1972, [1,2,3], friends];
console.log(bek);


const calcAge = function (birthYear) {
    return 2040 - birthYear;
}
const years = [1991, 1984, 2008, 2022, 2028, 2036];

const age = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);

console.log(age, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages)

const population =[66000, 6000, 33000, 150000];
console.log(population.length === 4);


const percentageOfWorld = (population) => {
    return (population / 79000 * 100).toFixed(2);
}

const percentages = [
    percentageOfWorld(population[0]),
    percentageOfWorld(population[1]),
    percentageOfWorld(population[2]),
    percentageOfWorld(population[3]),
];
console.log(percentages);