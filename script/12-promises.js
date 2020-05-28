// Promises
// ======================================

const applyDiscount = new Promise((resolve, reject) => {
    setTimeout( () => {
        let discount = false;

        if(discount) {
            resolve('Discount applied!')
        } else {
            reject('Couldn\'t apply discount.')
        }
    }, 3000);
});


applyDiscount
    .then(response => console.log(response))
    .catch(error => console.log(error));

// console.log(applyDiscount);
