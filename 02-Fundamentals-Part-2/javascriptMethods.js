// Push adds elements at end
const friends = ['Alex', 'John', 'Leticia', 'Jacob']
const newLength = friends.push('Bek');
console.log(friends);
console.log(newLength);

//unshift adds elements to beginning
friends.unshift('Johnny');
console.log(friends);

//remove last element
friends.pop();
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);

//removes first element
friends.shift();
console.log(friends);


//returns the index of element
console.log(friends.indexOf('Alex'));
console.log(friends.indexOf('Lex')); //not in index returns -1

//E6 method is called includes
console.log(friends.includes('Alex'));
console.log(friends.includes('Lex'));

if (friends.includes('Alex')) {
    console.log(`You have a friend called Alex`);
}


const neighbours = ['USA', 'Canada', 'Mexico'];

neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

console.log(neighbours.indexOf('Germany'));

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a in North American country`);
}

neighbours[neighbours.indexOf('Mexico')] = 'Republic of Mexico';
console.log(neighbours);

















