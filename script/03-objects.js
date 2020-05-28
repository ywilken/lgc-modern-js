// Objects

// ======================================
console.log('---OBJECT LITERAL:')
// Object Literal

const contact = {
    name: 'John',
    profession: 'developer'
}

// Access values
console.log(contact)
console.log('Name: ' + contact.name)
console.log('Name: ' + contact['name'])
console.log('Profession: ' + contact.profession)



// ======================================
console.log('---OBJECT CONSTRUCTOR:')
// Object Constructor
// create objects dynamically
// we use the function syntax but the name capitalized

function Task(name, urgency) {
    this.name = name;
    this.urgency = urgency;
}

// Create a new task
const task1 = new Task('Learn React', 'Dream!!!');
const task2 = new Task('Learn Modern JS', 'Urgent');

console.log(task1)
console.log(task2)