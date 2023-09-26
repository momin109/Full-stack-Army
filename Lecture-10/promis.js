/* const isResoleved = true;

const promise = new Promise((resolve, reject) => {
    if (isResoleved) {
        resolve('this is true the value')
    } else {
        reject('data')
    }
})
console.log(promise)

promise.catch((e) => {
    console.log('reject')
    console.log(e)
})
 */

/* const isResoleved = true;

const promise = new Promise((resolve, reject) => {
    if (isResoleved) {
        resolve('this is true the value')
    } else {
        reject('data')
    }
})
console.log(promise)

promise
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log('reject')
        console.log(e)
    })
 */

/*
function wait(ms) {
    const promise = new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
    return promise
}
wait(1000).then(() => {
    console.log('done in one second')
})
wait(3000).then(() => {
    console.log('what is your name')
})
wait(5000).then(() => {
    console.log('My name is abdul momin')
})
 */

/////upore neche ta same to cade

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) /// promise modhe argument akare resolve nilam.//  setTimeout call kora hobe .// promise are setTimeout same .// setTime modhe somai dorkar tai . tai setTimeout modhe pass korte parbo tai baire somai (ms) pass korlam

wait(1000).then(() => {
    console.log('done in one second')
})
wait(3000).then(() => {
    console.log('what is your name')
})
wait(5000).then(() => {
    console.log('My name is abdul momin')
})

//////////////////////
/* 
function wait2(ms) {
    const isPromise = false;
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, reject, ms)
        if (isPromise) {
            resolve('this is promise')
        } else {
            reject('this is promise rejuct')
        }
    })
    return promise
}

wait2(100).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

 */

