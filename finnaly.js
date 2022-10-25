const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"

];

Promise.all(urls.map((url)=>{
    return fetch(url).then(post => post.json())
})).then(res => {
    // throw error('This is error'); // If this error line is uncomment then there will no comment of following posts.
    console.log('post 1 ', res[0])
    console.log('post 2 ', res[1])
    console.log('post 3 ', res[2])
})
.finally(()=>{
    console.log('This is the finnaly section')
})