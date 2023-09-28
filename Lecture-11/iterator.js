/* const range = { // iterator symple code
    start: 0,
    stop: 100,
    step: 5
};

range[Symbol.iterator] = function () {
    //ai khane kichu kaz korte hobe
    return {
        next() {
            // ai kane all caz hobe
            return 
        }
    }
} */

/* 
const range = {
    start: 0,
    stop: 100,
    step: 5
};

range[Symbol.iterator] = function () {
    let current = this.start;
    const stop = this.stop;
    const step = this.step;

    return {
        next() {
            const obj = { // next call korle duita proprty pabo
                value: current,
                done: current > stop
            };
            current += step;
            return obj
        }
    }
}

for (let v of range) {
    console.log(v)
} */

const range2 = {
    start: 0,
    stop: 100,
    step: 5,
}

range[Symbol.iterator] = function () {
    let current = this.start;
    const stop = this.stop;
    const step = this.step
    return {
        next() {
            const obj = {
                value: current,
                done: stop > current,
            }
            return obj
        }
    }
}

for (let c of range2) {
    console.log(c)
}