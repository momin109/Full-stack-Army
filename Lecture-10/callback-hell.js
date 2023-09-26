/* 
1. find user by username
2. find posts userid
3. find latest post
4. find comments by post id
5. find latest comment
6. find username of the last commented user
*/

/* 
/users?username=[username]
/posts?post_id=[user_id]
/comments?post_id=[post_id]
/users?username=[username]
*/



/* function get(path, cb) {
    const data = {};
    cb(data)
}

function getUserNameFromComment(username) {
    get(`/users?username=${username}`, (user) => {
        get(`/posts?post_id=${user_id}`, (posts) => {
            get(`/comments?post_id=${posts[0].id}`, (comments) => {
                get(`/users?username=${comments[0].username}`, (user) => {
                    console.log(user)
                });
            });
        });
    });
}

getUserNameFromComment('Abdul Momin') */



function get(path, cb) {
    // Assume some asynchronous operation to fetch data and call the callback
    // In a real application, this would be an AJAX request or similar.
    const data = {};  // Assuming this is populated with relevant data
    setTimeout(() => {
        cb(data);
    }, 1000);  // Simulating an asynchronous call with a delay
}

function getUserNameFromComment(username) {
    get(`/users?username=${username}`, (user) => {
        get(`/posts?post_id=${user.id}`, (posts) => {
            get(`/comments?post_id=${posts[0].id}`, (comments) => {
                get(`/users?username=${comments[0].username}`, (user) => {
                    console.log('User:', user);
                });
            });
        });
    });
}

getUserNameFromComment('Abdul Momin');
