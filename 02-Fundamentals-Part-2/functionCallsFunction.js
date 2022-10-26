const cutPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);

    return `Juice with ${applePieces} piece of apple and ${orangesPieces} piece of orange.`;
}

console.log(fruitProcessor(3,8));

const percentageOfWorld = (population) => {
    return (population / 79000000000 * 100).toFixed(2);
}

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld(population);
    return `${country} has ${population} million people, which is about
    ${percentage}% of the world population.`;
}

console.log(describePopulation('USA', 400000000));