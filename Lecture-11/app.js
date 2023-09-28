/* const arr = [1, 2, 3, 4];

let index = 0;
function next() {
    return arr[index++];
}

console.log(next())
console.log(next())
console.log(next())
console.log(next())
console.log(next())
 */


/* const arr = [1, 2, 3, 4];

let index = 0;
function next() {
    return arr[index++];
}
console.log(next())

for (let i = 0; i < 10; i++) {
    console.log('hello world')
}
console.log(next()) */

/////////////////////////////////

/* const channel = 'Stack Learner';

channel[Symbol.iterator] // sybmol iterator akta function //  */



/* const channel = 'Stack Learner';

const channelIterator = channel[Symbol.iterator]() // channelItarator call korle akta object return korche// 

console.log(channelIterator.next()) // ai khane next() call korlam // protom call kora mane protom valu ta pabo. protom value [S] ta pabo

console.log(channelIterator.next()) // ditio bar call korle [t] pabo //exmple: { value: 't', done: false }
 */

/* const channel = 'Stack';

const channelIterator = channel[Symbol.iterator]()

console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())  */

/* const channel = 'Stack';

const channelIterator = channel[Symbol.iterator]()

for (let v of channel) {
    console.log(v)
} */

const channel = 'Stack';

const channelIterator = channel[Symbol.iterator]()

while (true) {
    const data = channelIterator.next()
    if (data.done) {
        break;
    }
    console.log(data.value)
}