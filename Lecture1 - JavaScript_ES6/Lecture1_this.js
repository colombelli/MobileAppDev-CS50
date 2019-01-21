// this:
// * refers to an object that is set at the creation of a new execution context (function invocation)
// * in the global execution context, refers to global object
// * if kthe function is called as a method of an object , 'this' is bound to the object the method is called on


const person = {
  name: 'felipe',
  greet: function() { console.log('hello, ' + this.name) }
}

person.greet()

const greet = person.greet

greet()   // as greet is invoked here, this refers to a global object
// output: hello, undefined
// because the global object doesnt have an attribute named name


const friend = {
  name: 'jordan',
}

friend.greet = person.greet
friend.greet()

// binding in order to catch the right 'this'
const greet2 = person.greet.bind({name: 'this is a bound object'})
greet2()

// using call and apply
person.greet.call({name: 'this is a call'})
person.greet.apply({name: 'this is an apply'})

// ES6 arrow notation will bind this to be whatever the value is at the time of writing
const newPerson = {
  name: 'new person',
  greet: () => { console.log('hi, ' + this.name) }
}

newPerson.greet() // hi, undefined
