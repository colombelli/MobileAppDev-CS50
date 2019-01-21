function printOne(){
  console.log('one');
}

function printTwo(){
  console.log('two');
}

function printThree(){
  console.log('three');
}

printOne()
printTwo()
printThree()

// prints out one after another, but we can set a time before executing some function
console.log(' -------- ')

setTimeout(printOne, 1000) // 1000 ms = 1s
setTimeout(printTwo, 0)
printThree()
// note that in this configuration it will print 'three', 'two', and last, 'one',
// because the asynchronous setTimeout will deliver the functions
// from the stack to the API and execute everything on the stack before the
// event loop check for function queue. So, the first two calls will end handled
// by the API and when they're done, it will put those functions on the queue which
// will throw them in the stack as soon as it gets empty.

// Asynchronous functions examples:
// setTimeout, XMLHttpRequest, jQuery.ajax, fetch and database calls

// Callbacks:
// -> control flow with asynchronous calls
// -> execute function once asynchronous call returns value (program doesn't have to halt and wait)


function doSomethingAsync(callback) {
setTimeout(function () {callback(1)}, 1000)
}

doSomethingAsync(console.log)
