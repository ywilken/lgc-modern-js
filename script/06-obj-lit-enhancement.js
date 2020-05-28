// Object Literal Enhancement
// = the opposite of Destructuring
// ======================================

const band = 'Metallica';
const genre = 'Heavy Metal';
const songs = ['Master of Puppets', 'Seek and Destroy', 'Enter Sandman'];

// ======================================
// The Old Way
console.log('---THE OLD WAY:')

const metallica = {
    band: band,
    genre: genre,
    songs: songs
}

console.log(metallica)

// ======================================
// New: Object Lireral Enhancement
console.log('---NEW - OBJECT LITERAL ENHANCEMENT:')

const newMetallica = {band, genre, songs};

console.log(newMetallica);
