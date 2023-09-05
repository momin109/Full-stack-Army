/* const arr = [];
for (let i = 0; i < 5000000; i++) {
    arr.push({ // id and value array moddhe push korlam
        id: i,
        value: i,
    })
}


let id = 4546000;
const obj = arr.find((itme) => itme.id === id)
console.log('value', obj.value)
obj.value = 555;  //object moddhe value update kore 555 ta rakhlam
console.log(obj)
const obj2 = arr.find((item) => item.id === id) */

////////////////////////

const arr = [];
const arrToObj = {}
for (let i = 0; i < 5000000; i++) {
    const data = {
        id: i,
        value: i,
    }
    arr.push(data);
    arrToObj[i] = data
}


let id = 4546000;
const obj = arr.find((itme) => itme.id === id)
console.log('value', obj.value)
obj.value = 555;  //object moddhe value update kore 555 ta rakhlam
console.log(obj)
const obj2 = arr.find((item) => item.id === id)

console.time('obj');
arrToObj[id].value = 999;
console.timeEnd('obj')
