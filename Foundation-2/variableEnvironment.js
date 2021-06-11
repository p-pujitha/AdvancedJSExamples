function two(){
    var isValid; 
    console.log(isValid)
}

function one(){
    var isValid= true;
    console.log("ONe: " +isValid)

    two();
}

var isValid = false; 
console.log("Global" + isValid)

one();


//two() => undefined
//one() => true
//global() => false