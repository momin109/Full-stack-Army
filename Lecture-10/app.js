// Date 25-09-2023
/* 
Agenda:
--Understand Asynchronouse Programing
--Event loop
--Ways we can handle Asychronouse Tasks
--Callback
--Promise
--Asynce Await
--Async iterator//
--Async generator
*/

/* // blocking => syncronouse
console.log('task one')
console.log('task two')
console.log('task three')
console.log('task four')

 */

function main() {
    setTimeout(() => {
        console.log('load last')
    }, 1)

    setTimeout(() => {
        console.log('load first')
    }, 0)

    text()
}

function text() {
    console.log('test')
}

main()