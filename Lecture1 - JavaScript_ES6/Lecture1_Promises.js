// Promises: (will be studied deeply in future lectures)
// -> aliviate callback hell
// -> allows you to write a code that assume a value is returned whithin a success function
// -> only need a single error handler

// example code (doesn't work) - promises will be studied deeply in later lectures
const url = ''

fetch(url)
  .then(function(res) {
    return res.json()
  })
  .then(function(json) {
    return ({
      importantData: json.importantData
    })
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(err) { // if there's an error in any of the Callbacks
    //handle error
  })
