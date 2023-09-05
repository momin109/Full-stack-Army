/* 
store 10 students information
*/

// a utility to create a random id
//neche function ta new id generator hobe
function uuid4() {
    return 'xxxxxxxx-xxxxx-4xxxx-yxxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// console.log(uuid4())

const students = {
    '2d6e4acc-ca3be-44ce7-b6e9c-651792b80101': {
        id: '2d6e4acc-ca3be-44ce7-b6e9c-651792b80101',
        name: 'Abdul Momin',
        email: 'abdulmomin@gmail.com'
    },
    'a143a734-2e380-455c3-94996-a26ca801725e': {
        id: 'a143a734-2e380-455c3-94996-a26ca801725e',
        name: 'Mehedi Hasan',
        email: 'mehedihasan@gmail.com'
    },
    'cd103740-00ad6-40417-96945-f6ab59669d86': {
        id: 'cd103740-00ad6-40417-96945-f6ab59669d86',
        name: 'Ruhul Amin',
        email: 'ruhulamin@gmail.com'
    }
}

/*  arrow rakha zonno ze ze kaz gulo korte pari
1. Easily Travers
1.1 Get anything if you have the key: o(1)
2. Filter
3. Delete
4. Update (medium) [push-> o(n)]
5. Create a new one (easy-> o(1)
 */

// create object

const std = {
    id: uuid4(),
    name: 'faruk Ahmed',
    email: 'farukahmed@gmail.com'
}

students[std.id] = std // students object modhe ki name rakhbo ta name dele oi name akta boject create hobe 

// Updated data
const idToUpdate = 'cd103740-00ad6-40417-96945-f6ab59669d86';
const newUpdateData = {
    name: 'HM Naim',
    // email: 'hmnaim@gmail.com'
}
students[idToUpdate] = {  // 
    ...students[idToUpdate], // ai vabe korle original data teke zabe 
    ...newUpdateData // ze data chenge korbo oi data chenge hobe baki gulo teke zabe [exmple: newUpdateData data moddhe name change korlam and email or onno property gulo teke zabe]
}

// Deleted data
// delete students[idToUpdate]


// console.log(students)

// get id

// console.log(students['2d6e4acc-ca3be-44ce7-b6e9c-651792b80101'])

for (let key in students) {  // not use 
    // console.log(students[key].email)
}

// object gulo array rupanto korle filter, forEach onno kono kaz kora subidha hoi
/* Object.keys(students).forEach((key) => {  // mutable way kaz kore
    const student = students[key];
    console.log(student.name, student.email)
}) */

Object.values(students).forEach((item) => {  // mutable way kaz kore
    // console.log(item.name, item.email)
})

const stdArray = Object.values(students);
stdArray[1].name = 'chenge'
console.log(stdArray)

// mutable way kaz korle memory zaiga kom lage
// immutable way kaz korel pochur poriman zaiga lage