// creates a say hello function which basically gets created by the following makeHelloFunction
// with a variable called message that gets wrapped in a closure

const sayHello = (function (){
  const message = 'Hello!'

  function sayHello(){
    console.log(message)
  }

  return sayHello
})()

// and the output is the same as previously tested in Lecture1.js
console.log('typeof message: ', typeof message)
console.log(sayHello.toString())

sayHello()


// why it might be useful: say we might want to have some class or something
// called a counter and we want o keep track of some number that we can just
// keep incrementing, and we can get that number. But say we also did not want
// that number to be accessible to other people.

const counter = (function () {
  let count = 0

  return {
    inc: function() { count = count + 1 },
    get: function() { console.log(count) }
  }
})()

counter.get()
counter.inc()
counter.get()



// solving the first closure bug with var i that always returns 5
function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++){
    arr.push((function (x) {
      return function() { console.log(x) }
    })(i))
  }

  return arr
}

const functionArr = makeFunctionArray()
functionArr[0]()
