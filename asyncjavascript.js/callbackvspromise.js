e1.addEventListener("click", submitForm);

//callback pyramid

movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Left', function() {

            })
        })
    })
})

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('Error, it broke');
    }
})

promise.then(result => console.log(result))

promise.then(result => result + "!")
    .then(result2 => {
        console.log(result2)
    })

promise.then(result = result + '!')
    .then(result2 => {
        throw Error
        console.log(result2);
    })
    .catch(() => console.log("Error!!!"))

promise.then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log("Error!!"))
    .then(result3 => {
        console.log(result3)
    })

promise.then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log("Error!!"))
    .then(result3 => {
        throw Error;
        console.log(result3)
    })

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'It is meee')
})

promise.finally(promise, promise2, promise3, promise4)
    .then(values => {
        console.log(values)
    })