function a(num1, num2) {
    return num1 + num2;
}

function b(num) {
    return num * 2;
}

console.log(b(7));
console.log(b(a(3, 4)))

//Referential Transperency