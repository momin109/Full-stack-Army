const express = require('express')
const app = express() //আমরা express() কল করার মাধ্যমে যে অ্যাপ্লিকেশন পেলাম তা app এর মধ্যে রাখলাম। এই app অনেক পাওয়ারফুল। আমাদের যা যা দরকার সব এটার মধ্যে আছে। এখন এটা এভাবে লিখে রাখলে তা কিছুই শো করবে না।

app.get('/', (req, res) => { //app আমাদের থেকে একটা get রিকোয়েস্ট নিবে। আর একটা কলব্যাক ফাংশন রিটার্ন করবে। এই ফাংশনের মধ্যে থাকবে তিনটা জিনিস। req, res, next. আমাদের আপাতত next দরকার নেই। আমরা res নিয়ে কাজ করবো। এখন আমরা যদি / রাউট পাঠাই তাহলে সে আমাদের রেসপন্স সেন্ড করবে। কি সেন্ড করবে? আমরা যা চাই। আমরা চাই কেউ / এ হিট করলে Thanks for your request এই লাইনটা দেখাবে।
    res.send('<h1>Thanks for your request</h1>') //kue amake req korle ami respone patate chaichi
})
app.get('/momin', (req, res) => {
    const obj = {
        name: 'momin',
        email: 'momin@gmail.com',

    }

    res.json(obj)
    // res.send(JSON.stringify(obj))
    // res.send(obj) // ai vabe pathano tik na // upore niam pata te hobe
})
app.get('/*', (req, res) => {
    res.send('<h1>404 , not working Server is Error</h1>')
})

app.listen(4000, () => {
    console.log('seccess is yor server')
})