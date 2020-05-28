// Example: Function Expression
const printTravel = function(destination) {
    return `Traveling to: ${destination}`
}

const lastTrip = printTravel('London');
console.log(lastTrip)


// ======================================
// Arrow Functions
const printTravel2 = (destination) => {
    return `Traveling to: ${destination}`
}

const lastTrip2 = printTravel2('Paris');
console.log(lastTrip2)



// ======================================
// AF: Simplified
const printTravel3 = (destination) => `Traveling to: ${destination}`;

const lastTrip3 = printTravel3('Madrid');
console.log(lastTrip3)