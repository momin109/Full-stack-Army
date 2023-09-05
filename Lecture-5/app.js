const numbers = [1, 2, 4, 7, 9, 13, 45, 37];
// // sob element start teke end pozonto zai ai ta ke travers bolle
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];

// }
// console.log(sum)

// //no. 1
// numbers.forEach(() => { // ai ta arrow function

// })
// //no. 2
// numbers.forEach(function () {  //normal function

// })
// //no. 3
// const cb = () => {
//     console.log('hello')
// }
// numbers.forEach(item => cb(console.log(item)))

// // no.4
// const cb2 = () => {
//     console.log('hello')
// }
// numbers.forEach(cb2)

// no.5

// numbers.forEach(() => { // ai khane amra bai teke call kori ni. // kintu forEach call koreche
//     console.log()
// })


numbers.forEach(function (value, index, arr) {  //1. protom kono kichu parameter dele seta (value return) korbe 2. second paramiter dele (index number asbe) 3.// three parameter dele seta (arr asbe) [numbers.forEach(function (value, index, arr) { ]
    // console.log(value, index, arr)
})

numbers.forEach(function (_, index) { // zodi value dorkar na hole (_) dete hobe (_) ar mane holo value ke buzano hoiche
    // console.log(index)
})

numbers.forEach(function (_, __, arr) { // zodi array dorkar holo (value,index,arr) ai vabe lekhte pari or aivabe lekha zai (_, __, arr)
    // console.log(arr)
})

// for loop kono kichu return kore na forEach kono kichu return kore na
numbers.forEach(function (value) { // zor songkha ber kora
    if (value % 2 === 0) {
        // console.log(value)
    }
})
//#
// let sum = 0;
// numbers.forEach(function (v) {
//     sum += v
// })
// console.log(sum)

////////////////////////
let sum = 0;
numbers.forEach(function (v, i) {
    if (i <= 3) {  // value 0 teke 3 pozonto zoto gulo sonkha sob gulo zog korbe
        sum += v
    }
})
console.log(sum)