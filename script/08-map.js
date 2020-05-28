// Arrays (=arreglos) & .map()
// ======================================

const shoppingCart = ['Phone', 'TV', 'CD Player']

const appContainer = document.querySelector('#app');
appContainer.innerHTML = shoppingCart;


// ======================================

// Access the individual items:
// forEach
let html_fe = '';
shoppingCart.forEach(product => {
    html_fe += `<li>${product}</li>`
})

// map - the same as in forEach
let html_map = '';
shoppingCart.map(product => {
    html_map += `<li>${product}</li>`
})

appContainer.innerHTML = `
    <h3>Using .forEach():</h3> 
    ${html_fe}
    <hr>
    <h3>Using .map():</h3> 
    ${html_map}
`;

// ======================================
// map - and more -> creating a new array
const newShoppingCart = shoppingCart.map(product => {
    return `The product is: ${product}`
});

console.log('---OLD ARRAY:')
console.log(shoppingCart)
console.log('---NEW ARRAY USING .MAP():')
console.log(newShoppingCart)