// The Spread Operator
// ======================================

let languages = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];


// ======================================
// COMBINE ARRAYS

// The old way
console.log('---THE OLD WAY - .CONCAT():')
let combinedArray = languages.concat(frameworks);
console.log(combinedArray);

// The new way
console.log('---THE NEW WAY - SPREAD OPERATOR:')
let newCombinedArray = [...languages, ...frameworks];
console.log(newCombinedArray);

// ======================================
// COPY AN ARRAY

let newLanguages = [...languages];
console.log(newLanguages);

// Now with a copy we can use methods that may destroy our array

let [last] = newLanguages.reverse();
console.log(last);
console.log(newLanguages);