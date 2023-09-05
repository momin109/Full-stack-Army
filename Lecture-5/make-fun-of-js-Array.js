//way NO.1  ## impretive ways
// ai ways memory zaiga kom lage . and apps kaz hang kom kore tai amra optimization korbo
//
/* 

//========ai code ti vhul ache , kintu kaz korbe============//
const arr = [1, 2, 3, null, false, null, 'tttt', 4, 5, '', 'text', 6, 7];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    // console.log('i ar value', i)
    for (let j = 0; j < arr.length - 1; j++) {
        if (!arr[j] || typeof arr[j] !== 'number') { // (!arr2[j])  arrow moddhe number rakhbe na

            arr[j] = arr[j + 1] // protom bar loop chailaiche dekhche [index-3] [null] ai ta number na pore element te [false] bosche .. // abar [index-7] dekche ai number na pore element bosche ai vabe kaz kore

            arr[j + 1] = undefined;

        }
    }
    if (arr[i] === undefined) {
        count++;
    }
}
arr.length -= count;
console.log(arr)
 */

//========upore code ti vhul ache , neche code te tik ache============//
//===============nested loops==============
/* const arr = [1, 2, 3, null, false, null, 'tttt', 4, 5, '', 'text', 6, 7];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    console.log('i', arr[i])
    for (let j = 0; j < arr.length - 1 - i; j++) {
        console.log('j', arr[j])
        if (!arr[j] || typeof arr[j] !== 'number') {
            arr.splice(j, 1);
            count++;
        }
    }
}
console.log(arr); */


//##################

// way no.2
// ai vabe korle exter memory besi lage . and mobile hang kore besi
const arr2 = [1, 2, 3, null, false, 4, 5, '', 'text', 6, 7];

// arr.filter take ai ta ke mathod boel(find,splice,forEach) ect method bole
const filterArray2 = arr2.filter((v) => typeof v === 'string') //filter typeof dea number, string,boolen,null etc dete pari
// console.log(filterArray2)
const arrto = arr2.filter(function (v) {
    return typeof v === "number"
})
console.log(arrto)

const newarrto = arr2.filter((v) => typeof v === "number")
console.log(newarrto)


/////////////
const filterArray3 = arr2.filter(function (v) {
    return typeof v === 'number'
})
// console.log(filterArray3)

const newArr2 = [];
for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] === 'number') {
        newArr2.push(arr2[i]);
    }
}
// console.log(newArr2)

// #fib

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(10))

const arr = [1, 2, null, false, '', 3, 4, 'text', null, 5, 6, false, true, 7];
const newarray = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {

        newarray.push(arr[i])
    }
}

console.log(newarray)