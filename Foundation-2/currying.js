function multiply(num1, num2){
    return num1 * num2;
}

const multiplyBytwo = multiply.bind(this,2);

console.log(multiplyBytwo(3))

const multiplyByTen = multiply.bind(this,10);

console.log(multiplyByTen(10))