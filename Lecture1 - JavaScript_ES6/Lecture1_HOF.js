// First-class functions basically describes the way that language handles functions
// in js functions are treated the same way as other values -> they're just objects
// "everything that is primitive is treated as just objects"
// They can be assigned to variables, array values, object values;
// they can be passed as arguments to other functions;
// can be returned from functions.

// High-order functions either takes one or more functions as arguments or returns a function
// examples: map(), filter(), reduce()

// map: maps a function to each value of any given array
const x = [0,1,2,3]
function addOne (number) { return number + 1 }
x.map(addOne) // it will increment 1 in each element of the array returning [1, 2, 3, 4]
// note that that operation will not reassign the values

// filter: retains the values that return true
function isGreaterThanOne(num) { return num > 1 }
x.filter(isGreaterThanOne) // it will return [2, 3] because 0 and 1 are false for the function used to filter

// reduce: takes an array of multiple values and reduce it to a single value
// first take the two first values, than pass the result as the first argument and the third value as the second argument, and so on
function add(x, y) { return x + y }
x.reduce(add) // it will return 6 (0+1, (0+1)+2, ((0+1)+2)+3)


// now as an exercise, let's code our own high-order function
function map (arr, fn){

  newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr[i] = fn(arr[i])
  }
  // instead of a for loop we could just use arr.forEach(function(val){newArr.push(fn(val))})

  return newArr
}

let array = [0,1,2,3]
console.log(map(array, addOne))
console.log(array)
