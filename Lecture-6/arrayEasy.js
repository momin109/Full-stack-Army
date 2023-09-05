const arr = [];
const object = {}
for (let i = 0; i < 5000; i++) {
    const o = {
        id: i,
        value: i,
        name: i,
    }
    arr.push(o);
    object[i] = o;
}

// array moddhe 5000 ta data push koreche potak data zevabe ache [ { id: 1001, value: 1001, name: 1001 } ]
arr[100] = { id: 1119229, value: 'what is your value', name: 'My name is momin' }
// console.log(arr.length)
console.log(arr[100])
console.log(arr[100].name)
console.log(arr[100].value)

let idNumber = 1002;
const obj = arr.find((item) => item.id === idNumber) // 1002 id number ta update korlam
obj.value = 'mam';
obj.name = 'kuddus mia tui ki koris re tui ki valo achis'
console.log(arr[1002])  // @-@[video time . 1houre .25 minute ]

console.time('array');
arr.unshift({
    id: 5001,
    value: 5001,
});
console.timeEnd('array')

console.time('objectt')
object[5000] = {
    id: 5000,
    value: 5000
};
console.timeEnd('objectt')

//delete
console.time('deletemethod')
const index = arr.findIndex((item) => item.id === 503)
arr.slice(index, 1)
console.timeEnd('deletemethod')

console.time('delete')
delete object[5005]
console.timeEnd('delete')