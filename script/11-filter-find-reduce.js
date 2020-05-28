// Array Methods
// ======================================

const people = [
    {name: 'John', age: 20, learning: 'JS'},
    {name: 'Linda', age: 12, learning: 'ReactJS'},
    {name: 'Maria', age: 35, learning: 'Vue'},
    {name: 'Mike', age: 40, learning: 'Angular'},
    {name: 'Steve', age: 36, learning: 'HTML'}
]

// ======================================
// FILTER AN ARRAY -> provides access to each individual item

// People older than 28
const oldPeople = people.filter(person => {
    return (person.age > 28) ? person : '';
})

// The Same: Shorter
const oldPeopleShort = people.filter(person => {
    return person.age > 28;
})


console.log('---USER > 28y - USING FILTER():')
console.log(oldPeople);
console.log(oldPeopleShort);



// ======================================
// FIND -> find specific keys (e.g. a user)

// What is Maria learning?
const maria = people.find(person => {
    return person.name === 'Maria';
});

console.log('---SPECIFIC USER = \'Maria\' - USING FIND():');
console.log(maria);
console.log(`${maria.name} is learning ${maria.learning}.`);



// ======================================
// REDUCE -> reduce an array to specific keys
// reduce receives 2 keywords: (reducer, currentValue)

const total = people.reduce((totalAge, person) => {
    return totalAge + person.age;
}, 0);


console.log('---USING REDUCE():');
console.log(`Total age: ${total}`);
console.log(`Average: ${total / people.length}`);