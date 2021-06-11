function fail() {
    try {
        console.log('this works');
        throw new Error('oopsie');
    } catch (e) {
        console.log('error', e);
    } finally {
        console.log('still good');
        return 'returning from fail';
    }
    console.log('never going to get here'); // not reachable
}
fail();

function testasync() {
    try {
        setTimeout(function() {
            fakevariable;
        }, 1000)
        console.log("async tried")
    } catch (e) {
        console.log('got it', e)
    }
}

testasync();