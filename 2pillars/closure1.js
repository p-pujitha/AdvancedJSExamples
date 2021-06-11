//closure = functions + scope
function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

console.log(a()()())

function boo(string) {
    return function(name) {
        return function(name2) {
            console.log(`hi ${string} ${name} ${name2}`)
        }
    }
}
console.log(boo('String')('Name')('Name2'))