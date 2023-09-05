/* 
const arr = [];
for (let i = 1; i < 50000000; i++) {
    arr.push(i);
};

console.time('not-optimized')
const result = arr.filter((item) => item % 2 === 0).map((item) => item)  // item* 2 dele zoto gulo item pabo tar sate 2 gun hobe [exmple: 2,4,6,8,10 *  4,8,12,16,20] ai vabe kaz korbe
console.log(result)
console.timeEnd('not-optimized')

console.time('optimized')
const result2 = arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur)
    }
    return acc;
}, [])
console.log(result2)
console.timeEnd('optimized')
 */

function myReduce(array, cb, init) {
    let acc = init;
    for (let i = 0; i < array.length; i++) {
        console.log(acc)
        acc = cb(acc, array[i], i, array)
    }
    return acc
}

const sum = myReduce([1, 2, 3, 4], (a, b) => a + b, 0)
console.log(sum)


const arr = [1, 2, 3, '', NaN, false, 4, 5, NaN, 6];

const result = myReduce(arr, (acc, cur) => {
    if (cur) {
        acc.push(cur * cur)
    }
    return acc;
}, [])

console.log(result)