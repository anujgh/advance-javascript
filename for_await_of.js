const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"

];

async function getData (){
    const urlRequests = urls.map(url => fetch(url).then(res => res.json()))

    for (let request of urlRequests) {
        const data = await request
        console.log(data)
    }
    
}