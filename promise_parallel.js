const promisify = (item, delay) => 
        new Promise((resolve) => 
        setTimeout(() => 
        resolve(item), delay))
    

const a =() => promisify('a', 500);
const b =() => promisify('b', 1000);
const c =() => promisify('c', 1500);

async function parallel() {
    const promisses = [a(),b(),c()]    
    const [ output1, output2, output3] = await Promise.all(promisses)
    return `This is the response in parallel pattern ${output1}, ${output2}, ${output3}`;
}


async function race(){
    const promises = [a(), b(), c()]
    const output = await Promise.race(promises);
    return `The winner of the all promises is ${output}`
}

async function sequance() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();

    return `The response with sequance ${output1}, ${output2}, ${output3}`
}

// parallel().then(console.log)
// race().then(console.log)
sequance().then(console.log)