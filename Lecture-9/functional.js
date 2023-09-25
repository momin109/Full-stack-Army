function name() {
}

const myfn = function samething() {
}
const myfatArrow = () => {
}

const myname = function () {

}

//pure function
function sum(a, b) {
    return a + b
}
const add = sum(10, 20)


//side effect
/* let limit = 100;
function chaingeLimit(limit) {
    limit = 300;
    return limit;
}
// console.log(limit) */

let limit = 100;

function chaingeLimit() {
    limit = 300;
    return limit;
}
chaingeLimit(limit)
// console.log(limit)

// pure function
const arr = [1, 2, 3];
function add(data) {
    arr.push(data)
}

// pure function
function log(msg) {
    console.log(msg)
}


// এই ফাংশনটা একটা পিওর ফাংশন। কিভাবে? এই ফাংশন দ্বারা কোনো কিছু চেইঞ্জ বা আপডেট করা হচ্ছে না।
function hFn(a, b) {
    const result = a + b;
    return result
}
// ai pure function
let limit3 = 100;
function changeLimit(limit) {
    limit3 = 500;
}

changeLimit(limit3);
console.log(limit3); // 100


//এবার কিন্তু ফাংশনটা ভ্যারিয়েবলের ভ্যালু চেইঞ্জ করে ফেলেছে। তার মানে এটার সাইড ইফেক্ট আছে। তাই এটা একটা ইমপিওর ফাংশন।
let limit2 = 100;
function changeLimit() {
    limit2 = 500;
}

changeLimit(limit2);
console.log(limit2); // 500

//এটা একটা পিওর ফাংশন।
const arr3 = [1, 2, 3];
function add(arr3, data) {
    arr = [...arr3, data];
    return arr3;
}

///////////////
//এটা পুরোপুরি একটা ইমপিওর ফাংশন। কারণ তা সরাসরি arr ভ্যারিয়েবলের ডাটা আপডেট করছে। তার মানে সাইড ইফেক্ট হচ্ছে।
const arr2 = [1, 2, 3];
function add(data) {
    arr2.push(data);
}

//এটা দেখতে আপাতদৃষ্টিতে পিওর ফাংশন মনে হলেও এটা একটা ইমপিওর ফাংশন। কারণ এটা কনসোলে লগ হচ্ছে। তাই যে ফাংশনে console.log() দেয়া থাকবে সেটা ইমপিওর হওয়ার পসিবিলিটি বেশি।
function log(msg) {
    console.log(msg);
}