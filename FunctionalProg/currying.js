//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
console.log(multiply(5, 5))
console.log(curriedMultiply(5)(20))
const multiplyBy5 = curriedMultiply(5)
console.log(multiplyBy5(20))