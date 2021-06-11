const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',


]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => {
    console.log("Error")
})

// using aysnc wait
const getData = async function() {
    const [users, posts, albums] = await Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    }))
    console.log('Users', users);
    console.log('Posts', posts)
    console.log('Albums', albums)
}

// in async wait it we have to use try catch blocks to catch the error.