/* 
The code you've provided is a JavaScript function uuid4() that generates a version 4 UUID (Universally Unique Identifier). UUIDs are commonly used to uniquely identify resources or entities in computer systems.

আপনি যে কোডটি দিয়েছেন তা হল একটি জাভাস্ক্রিপ্ট ফাংশন uuid4() যা একটি সংস্করণ 4 UUID (সার্বজনীনভাবে অনন্য শনাক্তকারী) তৈরি করে। UUID সাধারণত কম্পিউটার সিস্টেমে সংস্থান বা সত্তাগুলিকে অনন্যভাবে সনাক্ত করতে ব্যবহৃত হয়।

ফাংশনটি প্রদত্ত টেমপ্লেট 'xxxxxxxx-xxxxx-4xxxx-yxxxx-xxxxxxxxxxxx' ব্যবহার করে এবং একটি UUID তৈরি করতে নির্দিষ্ট অক্ষরকে এলোমেলো মান দিয়ে প্রতিস্থাপন করে। এখানে ফাংশনটি কীভাবে কাজ করে তার একটি ব্রেকডাউন রয়েছে:

The template 'xxxxxxxx-xxxxx-4xxxx-yxxxx-xxxxxxxxxxxx' defines the structure of a version 4 UUID
'x' অক্ষরগুলি এলোমেলো হেক্সাডেসিমেল সংখ্যা (0-9, a-f) দিয়ে প্রতিস্থাপিত হবে।
'4' অক্ষর 4 UUID সংস্করণের জন্য একটি নির্দিষ্ট মান উপস্থাপন করে।
'y' অক্ষরগুলি 8-11 রেঞ্জ থেকে একটি এলোমেলো হেক্সাডেসিমেল সংখ্যা দিয়ে প্রতিস্থাপিত হবে।
*/
//array modhe loop traverse kora neche loop travers kora hoiche
// bivinno ways loop travers kora hoi -> for in, for of, forEach
const object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

// Using a for...in loop
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key, object[key]);
    }
}

// Using Object.keys() and forEach loop
Object.keys(object).forEach(key => {
    console.log(key, object[key]);
});

const str = "Hello, World!";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// Using a for...of loop (ES6+)
for (const char of str) {
    console.log(char);
}





/*  this code zevabe kaz kore

function myReduce(array, cb, init) {
    let acc = init;
    for (let i = 0; i < array.length; i++) {
        console.log(acc)
        acc = cb(acc, array[i], i, array)
    }
    return acc
}

const sum = myReduce([1, 2, 3, 4], (a, b) => a + b, 0)
console.log(sum)




The line acc = cb(acc, array[i], i, array) inside the myReduce function is where the magic happens. Let's break it down:

acc: This is the accumulator variable that keeps track of the accumulated result.

cb: This is the callback function that you pass to myReduce. It takes four parameters:

acc: The current accumulator value.
array[i]: The current element from the array.
i: The current index of the element being processed.
array: The original array being reduced.
So, in each iteration of the for loop:

acc holds the current accumulated value.
array[i] holds the current element from the array.
i holds the current index of the element.
array is the original array being processed.
The line acc = cb(acc, array[i], i, array) calls the callback function cb with these parameters and assigns the result back to acc. Here's how it works:

In the first iteration, acc is 0, array[i] is 1, i is 0, and array is [1, 2, 3, 4]. So, it calls the callback function as follows: (0, 1, 0, [1, 2, 3, 4]), which results in 1, and this value is assigned to acc.

In the second iteration, acc is now 1, array[i] is 2, i is 1, and array is still [1, 2, 3, 4]. So, it calls the callback function as follows: (1, 2, 1, [1, 2, 3, 4]), which results in 3, and this value is assigned to acc.

This process continues for all elements in the array until the loop is finished.

In the end, the final value of acc represents the accumulated result, which is the sum of all the elements in the array. In your specific example, it will be 10, as mentioned earlier.

*/