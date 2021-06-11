function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        atack() {
            return 'atack with ' + weapon
        }
    }
}
const sam = createElf('Sam', 'fire');
const peter = createElf('Peter', 'bow');

console.log(sam.atack())
console.log(peter.atack())