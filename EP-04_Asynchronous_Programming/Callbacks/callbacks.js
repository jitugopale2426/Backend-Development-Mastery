//function - A function is a reusable block of code that performs a specific task when it is called (executed).

//A callback function is a function passed as an argument to another function, so it can be executed later.jj

//sayBye => Callback function

function greet (name, callback) {
    console.log(name)
    callback()
}

function sayBye () {  
    console.log("Goodbye!")
}
greet('Jitesh', sayBye)