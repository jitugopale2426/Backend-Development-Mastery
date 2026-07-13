
// A higher-order function is a function that takes one or more functions as arguments, returns a function, or both (1. Takes a function as an argument , 2. Returns a function)

//greet => High order Function

function greet (name, callback) {
    callback()             // Executes callback
    return function () {   // Returns this function
        console.log(name)
    }
}

function sayBye () {  
    console.log("Goodbye!")
}

const result = greet("Jitesh", sayBye); // Store function
result(); //Run function


//list of common methods that use callbacks

// Callback Examples

// JavaScript Built-in
// setTimeout()
// forEach()
// map()
// filter()
// reduce()
// ...many more

// Node.js Built-in
// fs.readFile()
// ...many more
