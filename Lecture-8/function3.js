// undifine * undifine = NaN asbe


function sum(a, b) {
    return (a + b)
}

function sub(a, b) {
    return (b - a)
}

function times(a, b) {
    return (a * b)
}
const a = 10
const b = 20;
const r = Math.abs(times(sum(a, b), sub(a, b))) //times ar modhe duita argument ache(sum(),sub()) //sum mane a, sub mane b

console.log(r)
/* const r1 = sum(a, b)
console.log('r1', r1)
const r2 = sub(a, b)
console.log('r2', r2)
const r3 = times(a, b)
console.log('r3', r3)
 */


