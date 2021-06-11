// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(330, 'Left'))

// async function playerStart() {
//     const firstMove = await movePlayer(100, 'Left');
//     await movePlayer(400, 'Left');
//     await movePlayer(10, 'Right');
//     await movePlayer(330, 'Left')
// }


fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)


async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
}