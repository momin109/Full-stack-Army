/* 
const names = [
    'Ayman',
    "Abu raihab",
    'Anik',
    'Elias',
    'Emon',
    'Fahim',
    'Firoz',
    'Momin',
    'Maruf',
    'Mehedi',
]

/# const namesGroup = { // neche code airokom output asbe
    A: ['Ayman', "Abu raihab", 'Anik',],
    E: ['Elias', 'Emon',],
    F: ['Fahim', 'Firoz',],
    M: ['Momin', 'Maruf', 'Mehedi',]
} #/

const namesGroup = names.reduce((acc, cur) => {
    const firstLeter = cur[0].toUpperCase();
    if (firstLeter in acc) {
        console.log('found', firstLeter)
    } else {
        acc[firstLeter] = [cur];
        // console.log('Not found for', firstLeter)
    }
    console.log(acc)
    return acc;
}, {})
 
*/


/*  */
// No. 2 just repeart


const names = [
    'Ayman',
    "Abu raihab",
    'Anik',
    'Elias',
    'Emon',
    'Fahim',
    'Firoz',
    'Momin',
    'Maruf',
    'Mehedi',
]

const namesGroup = names.reduce((acc, cur) => {
    const firstLeter = cur[0].toUpperCase();
    if (firstLeter in acc) {
        acc[firstLeter].push(cur)
    } else {
        acc[firstLeter] = [cur];
    }
    return acc;
}, {});

Object.keys(namesGroup).forEach((groupKey) => {
    console.log('----------', groupKey, '----------');
    namesGroup[groupKey].forEach((name) => console.log(name))
    console.log('')
})

