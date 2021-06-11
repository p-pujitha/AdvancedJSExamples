const urls = [
    'https://jsonplaceholder.typicode.com/users',

]

Promise.all(urls.map(url => {
        return fetch(url).then(people => people.json())
    }))
    .then(array => {
        console.log('1', array[0])

    })
    .catch(err => console.log('Fix it', err))
    .finally(data => console.log('Extra '))



const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises) {
        const data = await request.json()
        console.log(data)
    }
}