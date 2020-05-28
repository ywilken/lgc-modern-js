// Objects
// ======================================
console.log('---OBJECT CONSTRUCTOR:')
// Object Constructor

function Task(name, urgency) {
    this.name = name;
    this.urgency = urgency;
}

// Create a new task
const task1 = new Task('Learn React', 'Dream!!!');
console.log(task1)



// ======================================
console.log('---EXAMPLE:')
// Example 
function displayTaskInfo(task, priority) {
    return `The task '${task}' has a priority of '${priority}'`;
}

const displayAll = displayTaskInfo(task1.name, task1.urgency);

console.log(displayAll)



// ======================================
console.log('---PROTOTYPE:')
// Prototypes
Task.prototype.displayTaskInfo2 = function() {
    return `The task '${this.name}' has a priority of '${this.urgency}'`;
}

console.log(task1.displayTaskInfo2())