// map, filter, reduce 

/* 
map -> [same length as the original array]
fillter -> [with filtered item]
reduce -> Know one knows (only you know) numbers ,string boolean, function, object, arr [all posible value]
*/

/* const numbers = [1, 2, 3, 4, false, NaN, '', 5, 6];
numbers.reduce((previouse, current) => {  //previouse hoiche innitial value za debo seta hobe
}, ['ai khane [initial-প্রাথমিক ] value dete pare // sting, object, number zeno kichu dete pari']) */


/* const numbers = [1, 2, 3, 4, NaN, false, '', 5, 6];
const result = numbers.reduce((previouse, current) => {
    previouse += current;
    console.log(previouse)
    return previouse;
}, '')
console.log(result) */


/* const numbers = [1, 2, 3, 4, NaN, true, false, 'ff', '', 5, 6];
const result = numbers.reduce((previouse, current) => {
    if (current) {  // current value zegulo true expmle: number, string, true takle return korbe and false, emty string,NaN ai gulo false tai output debe na
        previouse += current.toString()
    }
    return previouse;
}, '')
console.log(result) */

/* 
const numbers = [1, 2, 3, 4, NaN, true, false, 'text', '', 5, 6];
const result = numbers.reduce((previouse, current, index) => {
    if (current) {
        previouse += current.toString() + (index < numbers.length - 1 ? ',' : '');  // numbere length 11 takle [1- minuse kore]  emty string [''] dete hobe
    }
    return previouse;
}, '')
console.log(result)
 */

/* 
const numbers = [1, 2, 3, 4, NaN, true, false, 'text', '', 5, 6];
const result = numbers.reduce((priviouse, current, index) => {
    if (index === 0) priviouse += '[';
    if (current) {
        priviouse += current.toString() + (numbers.length - 1 ? ',' : '')
    }
    if (index === numbers.length - 1) priviouse += ']'; //numbers.length 10 takle index numbers 0 teke suru hoi tai 10-1 minuse kore 9 hobe [ exmple: index number - 0,1,2,3,4,5,6,7,8,9, - ai khane total length 10 ta ache ]
    return priviouse;
}, '')

console.log(result)
 */
/* 
const numbers = [1, 2, 3, 4, NaN, true, false, 'text', '', 5, 6];

const result = numbers.reduce((previouse, current) => {
    if (current) {
        previouse.push(current.toString())
    }
    return previouse;
}, [])

console.log(result)
 */

const numbers = [1, 2, 3, 4, NaN, true, false, 'text', '', 5, 6];
const result = numbers.reduce((previoues, current, index) => {
    console.log('index', index, 'current', current, 'previouse', previoues)
    if (current) {
        previoues.push(current.toString())
    }
    return previoues
}, [])

console.log(result)