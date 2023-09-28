
//Function definition
// Function invoking
//Function Paramiter/argument
// Return result from Function

//importent rulse
// function program and functional program akoi zinis na

//Function is a first class citizen
// we can trest function as value
//10, "test",true -> function

/* 
Benefites:
-we can store functions in a variable
-we can store function inside an object / array
-we can pass function as an argument
-we can also return a function from another function
*/

/* //Prove -> Function is a value
function testFunction() {
    console.log('I am a test function')
}

const fn = testFunction
console.log(fn)
fn()

// function ke amra array modhe rakhte parbo and object modhe rakhte parbo
const ar = [fn, testFunction]
const object = {
    fn: testFunction
}
 */
/////////////////////////

/* function strToObject(str) {
    let obj = {};
    for (let s of str) {
        if (s !== ' ') {
            obj[s] = s;
        }
    }
    return obj
}
console.log(strToObject('Abdul Momin'))
 */


const fn = new Function(
    "str",
    `let obj = {};
for (let s of str) {
    if (s !== ' ') {
        obj[s] = s;
    }
}
return obj`
)
console.log(fn('Abdul Momin'))

const fData = {
    params: ['a', 'b'],
    body: ['const r =a+b', 'return r'],
};

const fbody = fData.body.reduce((acc, cur) => {
    acc += cur + ';';
    return acc;
}, '')

const tf = new Function(...fData.params, fbody)
console.log(tf(100, 200))



////////////////////////////////

const greethfn = new Function(
    'name',
    'email',
    `
    const fName = name.split(' ')[0];
    console.log('Hello,',fName, 'Is that your email?',email)
    console.log('yeah,this is mine');
    return fName
    `
);

// console.log('tyoeof2', typeof greethfn);
// console.log('tostring22', greethfn.toString());
const fName = greethfn('Abdul Momin', 'momin@gmail.com');
// console.log('first Name', fName)

////////////////////


const operation = [
    {
        args: [10, 20],
        params: ['a', 'b'],
        body: 'console.log("a+b=",a+b)'
    },
    {
        args: [10, 20],
        params: ['a', 'b'],
        body: 'console.log("a-b=",a-b)'
    },
    {
        args: [10, 20],
        params: ['a', 'b'],
        body: 'console.log("a*b=",a*b)'
    }
];


operation.forEach((operen) => {
    const fn = new Function(...operen.params, operen.body)
    fn(...operen.args)
})



const operations2 = [
    {
        arge2: [20, 30],
        params2: ['a', 'b'],
        body2: 'console.log(a+b)',
    },
    {
        arge2: [20, 30],
        params2: ['a', 'b'],
        body2: 'console.log(a-b)',
    },
    {
        arge2: [20, 30],
        params2: ['a', 'b'],
        body2: 'console.log(a*b)',
    },
    {
        arge2: [],
        params2: [],
        body2: 'console.log("hello world"),console.log("no parameter no argument")',
    },
    {
        arge2: [5],
        params2: ['n'],
        body2: ` 
        for (let i = 0; i < n; i++) {
            let line = '';
            for (let j = 0; j < n; j++) {
                line += '* ';
            }
            console.log(line)
        }
            `,
    },
];

operations2.forEach((operation2) => {
    const fn2 = new Function(...operation2.params2, operation2.body2)
    fn2(...operation2.arge2)
})

/* function box(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            line += '* ';
        }
        console.log(line)
    }
}
box(5) */

