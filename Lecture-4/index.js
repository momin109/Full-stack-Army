/*
console.log('abdul momin', 'abdul momin'.length);
throw new error('something is rong')
*/

///////////////////////////////////////////////
/* const names = ['abu raihan', 'abdul momin', 'kutubul alam', 'bablu rahman', 'hamid', 'hanif', 'faruk', 'tutul']

let index = 0;
let name = names[index];
console.log(name)

setInterval(() => {  // zotokhon na loop stop korbo na toto khon cholte takbe
    name = names[index++];
    console.log(name, name.length)

    if (index === names.length) {
        index = 0
    }
}, 1000)
 */


// ////////////////
// Scenario 1- single brunch
// if condition
/*
if (hasMoney) {
    purchessPhone()
}

// Scenario 2- two brunch
// if else condition

if (toss === head) {
    win()
} else {
    loss()
}

// scenario 3 - mulple brunch
if (1 > 1) {
    big()
} else if (1 < 1) {

}
 */


/* // zokhon amra zanbo na tokhon koto khon pozonto cholbe tokhon (while loop) use korbo
// while (when we don't the range)
while (true) {
    let num = Math.ceil(Math.random() * 100)
    console.log('abdul momin', num)
    if (num === 11) break;
}

 */


/* // do while condition false takle ak bar chalbe,
do {
    console.log('what is your name')
} while (false)
 */

// array

/*
// const students = ['Momin', 'Ruhul', 'Samim', 'Kudus', 'Billal']

for (let i = 0; i < students.length; i++) {
    console.log(students[i], students[i].toLowerCase())

}

////
const nums = [1, 2, 3, 4, 5]
const bools = [true, false, true, false]
const nulls = [null, null, null];
const us = [undefined, undefined, undefined];
const arrayOfArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const mixed = [null, undefined, true, false, 'ssh', 333]

const object = [
    names = {
        name: 'momin',
        id: '33',
        address: 'charmohonpur'
    }
]

const functionArray = [
    function sum() {
        console.log(3 + 4)
    }
]
 */

// object
/////////////////////////////////////////
/* 
const student1 = {
    firstName: 'abu',
    lastName: ' raihan',
    email: 'aburaihan@gmail.com',
}

const student2 = {
    firstName: 'kamal',
    lastName: ' uddin',
    email: 'kamaluddin@gmail.com'
}
const student3 = {
    firstName: 'faruk',
    lastName: ' Ahmed',
    email: 'farukAhmed@gmail.com'
}

const allStudent = [student1, student2, student3]
for (let i = 0; i < allStudent.length; i++) {
    sendEmail(allStudent[i].email)
}

// sendEmail(student1.email)

function sendEmail(email) {
    console.log('sending to eamil :', email)
}

allStudent.forEach(item => console.log(item.email))
allStudent.forEach(item => console.log('fulName: ', item.firstName, item.lastName))

 */
/* 
function nameOfFunction(name) {
    if (!name) {
        console.log('please provide your name')
    } else {
        console.log('Welcome', name)
    }

}

nameOfFunction('abdul samad')
nameOfFunction()
nameOfFunction()
 */

function generalRandomNumber(min, max) {
    const randomeNumber = Math.round(Math.random() * max)
    return randomeNumber;
}

console.log(generalRandomNumber(5, 10))
console.log(generalRandomNumber(50, 100))
console.log(generalRandomNumber(500, 1000))


/// express holo kono kichu akta return kore
// exmple:
// console.log('this is express')
// name('this express')
// const name = ()=> { this is express}

// statement kono kichu return kore na
// exmple: for loop, object , array
// const name = 'abdul momin'
//function name(){ 'this is statment'}
//return name; aita statment