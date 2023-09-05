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

console.log(uuid4())

const students = [
    {
        id: '2d6e4acc-ca3be-44ce7-b6e9c-651792b80101',
        name: 'Abdul Momin',
        email: 'abdulmomin@gmail.com'
    },
    {
        id: 'a143a734-2e380-455c3-94996-a26ca801725e',
        name: 'Mehedi Hasan',
        email: 'mehedihasan@gmail.com'
    },
    {
        id: 'cd103740-00ad6-40417-96945-f6ab59669d86',
        name: 'Ruhul Amin',
        email: 'ruhulamin@gmail.com'
    }
]

/*  arrow rakha zonno ze ze kaz gulo korte pari
1. Easily Travers
2. Filter
3. Delete
4. Update (medium) (easy) [push-> o(n)]
5. Create a new one (easy-> o(1), o(n))
 */

//create a new Student
students.push({
    id: uuid4(),
    name: 'Faruk Ahmed',
    email: 'farukahmed@gmail.com'
})

//Update
const idToUpdate = 'a143a734-2e380-455c3-94996-a26ca801725e';
const updatData = {
    name: 'Abdul Hamid',
    // email: 'abdulhamid@gmail.com'
}

/* // ai ta better solution na
const updatObj = students.find((item) => item.id === idToUpdate); // ai ta amra use kobo na just practise
updatObj.name = updatData.name;
updatObj.email = updatData.email */

const updateIndex = students.findIndex((item) => item.id === idToUpdate)
students[updateIndex] = {
    ...students[updateIndex],
    ...updatData,
};

console.log('updated', students)

//deleted
students.splice(updateIndex, 1);
console.log('delete', students)

// forEach, map, filter, every, reduce, some,find, findIndex[sob gulo array travers kora zai]

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)
}

for (let i in students) {
    console.log(students[i].name)
}

// letarature mane zekhane loop travers kora zai
// zeta travers kora zai setai letarable 