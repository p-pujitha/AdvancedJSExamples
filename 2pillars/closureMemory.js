function heavyDuty(item) {
    const bigArray = new Array(7000).fill('😄')
    console.log('created!');
    return bigArray[item]
}

console.log(heavyDuty(699))
console.log(heavyDuty(699))
console.log(heavyDuty(699))


const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(699))
console.log(getHeavyDuty(699))
console.log(getHeavyDuty(699))

function heavyDuty2() {
    const bigArray = new Array(7000).fill('😄')
    console.log('created Again!')
    return function(item) {
        return bigArray[item]
    }
}