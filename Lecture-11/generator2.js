
const axios = require('axios').default
/*
async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data: users } = await axios.get(url)

    return users
}

getUsers()
    .then((users) => {
        console.log(users)
    })
    .catch((e) => {
        console.log(e)
    }) */

//////////////////

/* async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data: users } = await axios.get(url)

    return users
}


async function* getPostsByUser(users) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    for (let i = 0; i < users.length; i++) {
        const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`)
        yield posts
    }
}

getUsers()
    .then(async (users) => {
        // const userIterator = await getPostsByUser(users)
        // await userIterator.next() // protom data next call korechi kintu print kore ne
        // await userIterator.next()
        // console.log((await userIterator.next()).value) // ai ta call kore tai tai output asche

        for await (let v of getPostsByUser(users)) { // getPostsByUser akta asyne tai for pore await use korechi
            // console.log(v)

            console.log(v.map((d) => d.title))
        }
    })
    .catch((e) => {
        console.log(e)
    }) */



////////////////////
/* 
async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data: userid } = await axios.get(url)
    return userid
}

async function* getPostsByUser(usersd) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    for (let i = 0; i < usersd.length; i++) {
        const { data: posts } = await axios.get(`${url}?userId=${usersd[i].id}`)
        yield posts
    }
}

getUsers()
    .then(async (users) => {
        for await (let v of getPostsByUser(users)) {
            console.log(v.map((d) => d.title))
        }
    })
    .catch((e) => {
        console.log(e)
    })
 */
/////////////// upore code and neche code deffarent code hole same data pabo
async function getUser() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data: users } = await axios.get(url)
    return users.map((user) => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    );

}

(async () => {
    const users = await getUser()
    for (let user of users) {
        const { data: posts } = await user;
        console.log(posts)
    }
})()
