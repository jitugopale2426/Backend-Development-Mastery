
async function demo() {
  console.log("A"); // Executes immediately

  // Create a Promise.
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("async function wait 2 seconds"); 
      resolve(); 
    }, 2000)
  );

  // Runs after the Promise is resolved
  console.log("B");
}

demo();

console.log("C");
