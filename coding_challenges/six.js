

const calcTip = bill =>  bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
console.log(calcTip(100));

const bills = [125, 557, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [(bills[0] + calcTip(bills[0])), (bills[1] + calcTip(bills[1])), bills[2] + calcTip(bills[2])];
console.log(total);