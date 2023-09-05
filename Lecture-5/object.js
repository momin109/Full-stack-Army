
// No. 1  Object Literal
const microphone = {  // ai ta ke bolla hoi Object Literal
    brand: 'Fifine',
    indicator: true,
    price: 4000,
    color: 'black',
    sartRecoding() {
        console.log('recoding started')  // zokhon akta function object moddhe take tokhon ai ta ke mathod bole.
    },
    stopRecording: () => {
        console.log('stop recoding') // ai ta ke method bole
    }
}

Object.freeze(microphone) // freeze dele new kono property update hobe na
microphone.newProerty = 'my new property'
// console.log(microphone)

// console.log(Object.keys(microphone)) //object.keys dele zoto gulo object key property ache sob gulo arrow  rupanto korbe
// console.log(Object.values(microphone))

console.log('My microphone =' + microphone);  // [+] chinno zaiga concat use korte pari[dui ta same]

function startRokoding() { // ai ta ke function bole

}
//function sorasori call kora zai
startRokoding() // function baire teke call kora zai

/* 
there are two different parts in object
1. noun / adjective (state/data/property/field)
2. verb / (functionlities -> start , stop)
*/

// dot notation microphon.brund
// array notation microphon['brand']

for (let key in microphone) { //for in loop object kaz kore for of loop array moddhe kaz kore
    // console.log(key, microphone[key])
}

/* const emty = {};
console.log(Object.keys(emty).length === 0)
console.log(Object.entries(microphone)) // ectries dele object ke arrow rupanto korbe */

/////////////////////////////////////////

//No.2 constructor function
const textObject = new Object(); // object lekha somai Object charector boro leter dete hobe
textObject.name = 'abdul momin';
textObject.time = new Date();
// console.log(textObject)



const newArrow = [
    ['brand', 'Fifine'],
    ['indicator', true],
    ['price', 4000],
    ['color', 'black'],
]

console.log(Object.fromEntries(newArrow))

