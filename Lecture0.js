const firstName = 'Felipe';
const lastName = "Colombelli"

const val = 42

const arr = [
  'string',
  42,
  function() {console.log('hi')},
]

arr[2]()

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/*
 == coerces the types when doing a comparsion
 === requires equivalent types
*/

const x = 42
console.log(typeof x)

const o = new Object()
o.firstName = 'Felipe'
o.lastName = 'Colombelli'
o.isLearning = true
o.greet = function(){
  console.log('hi');
}

// the prefered way to create object is with {}
const o2 = {}
o2.firstName = 'Felipe'
o2['lastName'] = 'Colombelli'
const key = 'isLearning'
o2[key] = true
o2['greeting'] = function(){
  console.log('hi')
}

const o3 = {
  firstName: 'Felipe',
  lastName: 'Colombelli',
  isLearning: true,
  greet: function(){
    console.log('hi')
  },
  address: {
    street: 'abc st',
    number: 123
  }
}

// object mutation
const o4 = {
  a: 'a',
  b: 'b'
}

const o5 = o4
o4.a = 'new value'

console.log(o5.a) // prints out 'new value' cause they store it by reference

// to see prototype inheritance of, for example, an array arr
// we could write on the console: arr.__proto__

// Scope and variable lifetimes:
const cantChange = 51
let canChange = 50

// cantChange = 50   -> error
canChange = 1

// note: var is the old way to do that
// and dont protect you from doing double declarations
// like
// var variable = 1
// var variable = 1

// function hoisting:
// means that you  can declare a function in the end
// of the file and call it in the beggining
// but it doesnt works when the function is declared
// at the bottom of the file as a constant or let or var

// closures:
function makeFunctionArray(){
  const array = []

  for (var i=0; i<5; i++){
    array.push(function(){ console.log(i) })
  }

  return array
}

const array = makeFunctionArray()

array[0]()
