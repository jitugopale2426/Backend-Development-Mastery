
//setTimeout - callback function
// function sayHello() {
//   console.log("hello");
// }
// setTimeout(sayHello, 1000); // 1 sec



//Nested Example
//Nesting means putting one function inside another function's callback — so the inner one only runs after the outer one finishes.
//This is called nested callbacks.
//It becomes Callback Hell (also known as the Pyramid of Doom)

console.log("start");

setTimeout(() => {
  console.log("Step 1 done");

  setTimeout(() => {
    console.log("Step 2 done");
  }, 1000);

}, 1000);

