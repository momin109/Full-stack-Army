const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
];


/* //splice => mutable
const index = arr.findIndex((item) => item.id === 4);
const arr1 = arr.splice(index, 1); // splice kore arr moddhe index delete kore [index pore zoto number debe toto element delete hobe]
// console.log(arr) */


// filter => immutable
const arr2 = arr.filter((item) => item.id !== 2)  // zoto number index [!==] or not korbo sei element bade baki gulo output asbe
console.log(arr)
console.log(arr2)
