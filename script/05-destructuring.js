// Object Destructuring
// ======================================
// console.log('---OBJECT CONSTRUCTOR:')

const learningJS = {
    version: {
        shortNewV: 'Modern JS',
        newV: 'ES6+',
        oldV: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS'] 
}




// The old way to extract values
console.log('---THE OLD WAY:')

const versionOld = learningJS.version.oldV;
console.log(versionOld);




// Destructuring is extracting values
console.log('---NEW - OBJECT DESTRUCTURING:')

const { version, frameworks } = learningJS;
const { newV } = version;
console.log(newV)

// Even Shorter
const { shortNewV } = learningJS.version;
console.log( shortNewV ) 