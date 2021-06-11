//function expression
var canada = function(){
    console.log("cold");
}

// function declaration
function india(){
    console.log("warm")
}

canada();
india();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function marry(person1, person2){
    console.log("Arguments :" + arguments[0] + " , " + arguments[1]);
    console.log('${person1} married to ${person2}' + person1)
    return `${person1} married to ${person2}`
}
marry('John','Marrie');

function marry2(...args){
    console.log(`${args[0]} married to ${args[1]}`)
}

marry2('person1', 'person2' )