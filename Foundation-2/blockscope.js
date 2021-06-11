function blockScope(){
    for(let i=0; i<5; i++){
        console.log("variable i :" + i);
    }
    console.log("final variable i value :" + i);
}

blockScope();
// try with let instead of var