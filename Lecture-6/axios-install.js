/* const axios = require('axios').default
const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
    const { data } = await axios.get(url);
    console.log(data)
}
getData() */

///////####

//map
/* 
const axios = require('axios').default
const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
    const { data } = await axios.get(url);
    const result = data.slice(0, 10).map((item) => {  // slice kore kore nidisto data return korbe ta bole dete pari
        // map kore kono din object return kore na. map sobsomai array return kore
        return {  //map kore data ke return korlam
            id: item.id,
            userId: item.userId,
            title: item.title,
        }
    })
    return result;
}
getData().then((data) => console.log(data)).catch((e) => console.log(e))
 */

// reduce use kore

const axios = require('axios').default
const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
    const { data } = await axios.get(url);
    const result = data.slice(0, 10).reduce((acc, cur) => {
        acc[cur.id] = {
            ...cur
        }
        delete acc[cur.id].body // accumulate moddhe current ar id dhore tar body k delete kore delam
        return acc;
    }, {})
    return result;
}
getData().then((data) => console.log(data)).catch((e) => console.log(e))
