// Using Parameters inside a function

// In function declaration:
function printActivity(name='John Doe', activity='"doeing" something') {
    console.log(`The person ${name} is ${activity}.`)
}

printActivity();
printActivity('Mike', 'learning to code');
printActivity('Lucy', 'getting her first dev job')


// In function expression:
// Function expressions look similar to arrow functions
const printActivity2 = function(name='John Doe', activity='"doeing" something') {
    console.log(`The person ${name} is ${activity}.`)
}

printActivity2();
printActivity2('Mike', 'learning to code');
printActivity2('Lucy', 'getting her first dev job')

// Arrow Functions
let printTravel