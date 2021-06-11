const animals = {
    lion: 23,
    tiger: 5,
    monkey: 2,
    bird: 40
}

const { lion, tiger, ...rest } = animals


const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sum(...array))


function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { lion, tiger, ...rest } = animals

objectSpread(tiger, lion, rest);