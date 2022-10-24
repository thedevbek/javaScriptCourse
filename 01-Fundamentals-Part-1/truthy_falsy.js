// # 5 falsy values: 0, '', undefined, null, NaN
// all of these will convert to false when converted to a boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Bek'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height;
if(height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`YAY! Height is undefined`);
}

//Can have issues with height being defined as 0 because it is
//also a falsy value...BE CAREFUL!!!

const age3 = 18;
if(age3 === 18) 
console.log(`You are an adult now!`);
// # don't need to use {} if you only have an if statement just
//# console.log it!!!
