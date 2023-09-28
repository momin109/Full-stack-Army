/* 
/users?username=[username]
/posts?post_id=[user_id]
/comments?post_id=[post_id]
/users?username=[username]
*/

/* const get = (url) => Promise.resolve();

get(`/users?username=${momin}`)
    .then(user => {

    })
    .catch(() => {
        console.log('error')
    }) */

//////////////
//atia chainning hoiche // aita valo bolla zai
/* 
const get = (url) => Promise.resolve();

get(`/users?username=${momin}`)
    .then(user => {
        // do all other operation here 
        return get(`/posts?post_id=${user.id}`);
    })
    .then(posts => {
        const latastPost = posts[0]
        return get(`/comments?post_id=${latastPost.id}`)
    })
    .then(comments => {
        const latestComment = comments[0]
        return get(`/users?username=${latestComment.username}`)
    })
    .then(user => {
        console.log(user)
    })
    .catch(() => {
        console.log('error')
    })
 */

/////

/* function getUserName() { //aita synchronouse function
    // normal function bolla zai
} */

/* async function getUserName() { // ai function ta akta promise return kore

}

async function getUserName() { // same async takle defult hisabe akta promise return kore 

} */

//// //// upore code ta chei ai code  ta best and bujai zai // ai ta 100% use kora chesta korbo

const get = (url) => Promise.resolve();

async function getUserName(username) {
    try {
        const mainUser = await get(`/users?username=${username}`)
        const posts = await get(`/posts?post_id=${mainUser.id}`)
        const comments = await get(`/comments?post_id=${posts.id}`)
        const user = await get(`/user?username=${comments[0].username}`)
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}