// The Spread Operator
// ======================================

let languages = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];


// ======================================
// COMBINE ARRAYS

// The old way
console.log('---COMBINE ARRAYS (OLD) - .CONCAT():')
let combinedArray = languages.concat(frameworks);
console.log(combinedArray);

// The new way
console.log('---COMBINE ARRAYS (NEW) - SPREAD OPERATOR:')
let newCombinedArray = [...languages, ...frameworks];
console.log(newCombinedArray);




// ======================================
// COPY AN ARRAY
// The leave our origin files intact
console.log('---COPY AN ARRAY:')

let newLanguages = [...languages];
console.log(newLanguages);

// Now with a copy we can use methods that may destroy / change our array
console.log('---USING MUTATING METHODS - WITHOUT SPREAD:')
let [last] = newLanguages.reverse();
console.log(last);
console.log(newLanguages);

//Using the spread operator
console.log('---USING MUTATING METHODS - WITH SPREAD:')
let [last2] = [...languages].reverse();
console.log(last2);



// ======================================
// SPREADING VALUES FOR PARAMETERS

function sum(a,b,c) {
    console.log(a+b+c);
}

let numbers = [1,2,3];

console.log('---SPREAD VALUES AS PARAMETERS - WITHOUT SPREAD:')
sum(numbers);

console.log('---SPREAD VALUES AS PARAMETERS - WITH SPREAD:')
sum(...numbers);
