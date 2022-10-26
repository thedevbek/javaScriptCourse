

const calcAverage = (num1, num2 , num3) => (num1 + num2  + num3) / 3;

const scoreDolphins = (calcAverage(44, 23, 71));
const scoreKoalas = (calcAverage(65, 54, 49));

console.log(scoreDolphins)
console.log(scoreKoalas)


function checkWinner (scoreKoalas, scoreDolphins) {
    if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win (${scoreKoalas}) vs.${scoreDolphins}`)
    } else if(scoreKoalas * 2 <= scoreDolphins) {
        console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`)
    } else {
        console.log(`Now winners!!`)
    }
}

checkWinner(scoreKoalas, scoreDolphins);

