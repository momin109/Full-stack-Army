const axios = require('axios').default
const USER_URL = 'https://jsonplaceholder.typicode.com/users'
const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments'

async function getComments(username) {
    try {
        const { data: user } = await axios.get(`${USER_URL}?username=${username}`) // https://jsonplaceholder.typicode.com/users?username=Bret //ai khane user-url bosailam .// [?username=${username} ai ta mane zar user dekhbo tar user url name dilam]
        const { data: posts } = await axios.get(`${POST_URL}?userId=${user[0].id}`)
        const { data: comments } = await axios.get(`${COMMENT_URL}?postId=${posts[0].id}`)

        const { data: userWithComment } = await axios.get(`${USER_URL}?eamil=${comments[0].email}`)
        console.log(userWithComment)
    } catch (error) {
        console.log('error masseges', error.toJSON())
    }
}

getComments('Bret')