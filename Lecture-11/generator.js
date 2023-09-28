/* function* myGenerator() { // ai ta generator function

} */

/*
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
};

const iterator = myGenerator()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
 */

///// //

/* function* range(start = 0, stop = 20, step = 5) { //paramiter start ,stop and step baire teke na call korle za deachi ta nebe
    for (let i = start; i < stop; i += step) {
        yield  //next function ke call korchi tokhon yield function auto metic next() call korche
    }
}
const rasult = range()
console.log(rasult.next())
console.log(rasult.next())
console.log(rasult.next())
console.log(rasult.next())
console.log(rasult.next())

 */
///////////
/* 
function* generatorId() {
    let index = 1;
    while (true) {
        yield index++
    }
}

const generatorUserId = generatorId()
const generatorProductId = generatorId()

console.log('User', generatorUserId.next().value)
console.log('User', generatorUserId.next().value)
console.log('User', generatorUserId.next().value)

console.log('productId', generatorProductId.next().value)
console.log('productId', generatorProductId.next().value)
console.log('productId', generatorProductId.next().value)
console.log('productId', generatorProductId.next().value)
console.log('productId', generatorProductId.next().value)
console.log('productId', generatorProductId.next().value)
 */

