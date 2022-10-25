const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 1000)
)

const promiseTwo = new Promise((resolve, reject)=>
setTimeout( reject,3000)
)

// Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))