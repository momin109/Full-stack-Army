/*
Higher order function
--function can be passed as an argument
--function can be return from another function
*/

/*
Hidden concepts
--Scope
--Closure
--Execution Context
--Hoisting
*/

//many report
/* function randomSum(max) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    return random1 + random2;
}
function randomSub(max) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    return random1 - random2;
}
function randomSqr(max) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    return random1 * random1 + random2 * random2;
}
console.log(randomSum(10))
console.log(randomSub(100))
console.log(randomSqr(20))
 */

///////////////////////// bad solution and, many report
/* 
function genarateTwoRandom(max) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    return {
        random1,  //Or// random1:random1  // object akare return korlam
        random2,  //Or// random2:random2 // dui vabe return kora zai
    };
}

function randomSum(max) {
    const { random1, random2 } = genarateTwoRandom(max)  //Destructuring korlam 
    return random1 + random2;
}
function randomSub(max) {
    const { random1, random2 } = genarateTwoRandom(max)
    return random1 - random2;
}
function randomSqr(max) {
    const { random1, random2 } = genarateTwoRandom(max)
    return random1 * random1 + random2 * random2;
}
console.log(randomSum(10))
console.log(randomSub(100))
console.log(randomSqr(20))

 */

/* function genarateTwoRandom(max, whatDoYouWant) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    const result = whatDoYouWant(random1, random2)
    return result;
}

genarateTwoRandom(100, (rand1, rand2) => { //firt argument pass korci 100, and second argument pass korchi (rand1,rand2)
    console.log(rand1, rand2)
}) */


/////////////  best solution
/* function genarateTwoRandom2(max, whatDoYouWant) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    const result = whatDoYouWant(random1, random2)
    return result;
}

genarateTwoRandom2(100, (rand1, rand2) => {
    const sum = rand1 + rand2;
    console.log('sum', sum)
})
console.log(genarateTwoRandom2(500, (rand1, rand2) => rand1 - rand2))
console.log(genarateTwoRandom2(500, (rand1, rand2) => rand1 * rand2)) */
/////////////  best solution
/* function genarateTwoRandom2(max, cb) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    const result = cb(random1, random2)
    return result;
}

genarateTwoRandom2(100, (rand1, rand2) => {
    const sum = rand1 + rand2;
    console.log('sum', sum)
})
console.log(genarateTwoRandom2(500, (rand1, rand2) => rand1 - rand2))
console.log(genarateTwoRandom2(500, (rand1, rand2) => rand1 * rand2))
 */


function genarateTwoRandom2(max, cb) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    const result = cb(random1, random2)
    return result;
}

const number = 100
const cb = (rand1, rand2) => {
    const sum = rand1 + rand2;
    console.log('sum', sum)
}
genarateTwoRandom2(number, cb)
console.log(genarateTwoRandom2(500, (rand1, rand2) => rand1 - rand2))
console.log(genarateTwoRandom2(500, (rand1, rand2) => rand1 * rand2))
