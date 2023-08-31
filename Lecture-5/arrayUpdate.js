const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
];

const obj2 = arr[2];
obj2.value = 700;
// console.log(arr[2] === obj2)  // ai khane arr sathe obj compare koche dui ta soman ki na


//## No. 1 ways
const index = arr.findIndex(function (v) {
    return v.id === 4;
})
arr[index].value = 400
// console.log(arr)

//## No. 1 ways
const obj = arr.find(function (v) {
    return v.id === 4;
});
obj.value = 500;

// console.log(arr)
//no
const objectArray = [
    { id: 1, value: 10, product: 'mobile', price: 4500 },
    { id: 2, value: 20, product: 'penBox', price: 450 },
    { id: 3, value: 30, product: 'camera', price: 4050 },
    { id: 4, value: 40, product: 'computer', price: 40500 },
    { id: 5, value: 50, product: 'iphone', price: 45700 },
]
//finde mathod mutable and filter method immutable
const object = objectArray.find(function (v) {  // finde mathod mutable
    return v.id === 3; // akhane [objectArray id number 3]
})

object.product = 'table';
// console.log(objectArray)

/////////////////////////////////

const a = {}, b = {}; // dui object soman hobe na. positon alada
const c = a;
console.log(a === b)
console.log(a === c)

