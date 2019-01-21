// closures:


function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++){
    arr.push(function () { console.log(i) })
  }

  return arr
}

const functionArr = makeFunctionArray()
functionArr[0]() // will return 5


// closure example
function makeHelloFunction(){
  const message = 'Hello!'

  function sayHello(){
    console.log(message)
  }

  return sayHello
}

const sayHello = makeHelloFunction()
// console.log(message) // we have an error because message is not defined
console.log('typeof message: ', typeof message) // undefined because message doesn't exist in this scope
console.log(sayHello.toString()) // but we can see it indeed access message by invoking other funciton
// i thought it was a hard topic to understand but in the end it's just about scoping

sayHello()


// if we go back to makeFunctionArray() and instead of var i we put let i,
// then the lifecycle of i ends after the block code {}, which means that
// functionArr[0]() will return 0, functionArr[1]() will return 1, and so on.
