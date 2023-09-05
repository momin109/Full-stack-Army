// map, filter, reduce [ai 3 ta data khub very very importent ai gulo valo kore zanle 50% kaz easy hobe]
// map, filter, reduce

const names = ['b', 'c', 'd'];
const text = names.map(() => 'emty')
// console.log(text)

// forEach kono kichu return kore na , kintu map , filter, reduce ai 3 ti kono kichu return kore

/* const numbers = [1, 2, 3, 4, false, NaN, '', 5, 6];
const filtered = numbers.filter((v) => !!v) // filter kora somai [!v] dele number bade baki gulo return korbe [!!v] doble not takle number return korbe
console.log(filtered)
const strs = filtered.map((n) => n.toString())

console.log(strs)
 */

// ai vabe korle memory zaiga kom lage // oparation system valo kaz kore
const numbers = [1, 2, 3, 4, false, NaN, '', 5, 6];  // aita sob che boro problem hole time [time complexity-সময় জটিলতা ] ai problem solve kora zonno [reduce]  use korte pari
const strs = numbers.filter((v) => v).map((n) => n.toString())
console.log(strs)