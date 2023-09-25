/* function sqr(n){
    return n*n;
} */

/* function cube(n){
    return n*n*n;
} */


//This code defines a higher-order function
// ai concepts t buja zonno abar video ta dekhte hobe/ / important concepts
function power(p) {
    return function (n) {
        let result = 1;
        for (let i = 1; i <= p; i++) {
            result *= n
        }
        return result
    }
}

const sqr = power(2) // 2
const cube = power(3)
const power8 = power(8)

console.log('sqr', sqr)
console.log('cube', cube)
console.log('power', power8)

console.log(sqr(2))

// lexing / parsing / tokenize -> compile -> run

//global
//local
// block scope

const a = 10;
function mostOuter() {
    function outer() {
        console.log(a)
    }
}

{
    var notScoped = 'not scope ' // not block scopted
    const scopted = 'scopted'// this is block scopted
    //this is block scope
}

console.log(notScoped)
// console.log(scopted)


{
    const notScoped222 = 'notScoped222'
    {
        {
            {
                console.log(notScoped222)
            }
        }
    }
}


