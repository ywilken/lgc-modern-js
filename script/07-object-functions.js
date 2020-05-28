// Object Functions
// ======================================

const person = {
    name: 'Mike',
    job: 'doctor',
    age: 35,
    likesRock: true,
    // Long Option:
    showData: function() {
        console.log(`${this.name} is ${this.age} years old. He is ${this.job} and ${this.likesRock ? 'likes' : 'doesn\'t like'} rock music.`)
    },
    // Short Option:
    showNewData() {
        console.log(`He will turn ${this.age + 1}.`)
    }
}

console.log('---LONG WAY:')
person.showData();

console.log('---SHORT WAY:')
person.showNewData()

// You use .this to access values inside an object