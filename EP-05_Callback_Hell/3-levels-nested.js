// Callback Hell Examples

//"Notice the shape forming? This is the start of the pyramid."

//Asynchronous Morning Routine Tracker

setTimeout(() => {
    console.log("Step 1: Wake up");

    setTimeout(() => {
        console.log("Step 2: Brush teeth");

        setTimeout(() => {
            console.log("Step 3: Have breakfast");
        }, 1000);

    }, 1000);

}, 1000);