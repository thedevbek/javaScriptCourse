
const dolphins = Math.round((97 + 112 + 80) / 3);
const koalas = Math.round((109 + 95 + 50) / 3);
console.log(koalas, dolphins)

if (dolphins > koalas && dolphins >= 100) {
    console.log("Dolphin Wins!");
} else if (koalas > dolphins && koalas >= 100) {
    console.log("Koalas Wins!");
} else if (dolphins === koalas && koalas >= 100 && dolphins >= 100) {
    console.log("Tie!");
} else {
    console.log("No one wins!");
}
