
//Making Tea — Step by Step

setTimeout(() => {
    console.log("Step 1: Boil water");

    setTimeout(() => {
        console.log("Step 2: Add tea leaves");

        setTimeout(() => {
            console.log("Step 3: Add milk");

            setTimeout(() => {
                console.log("Step 4: Add sugar");
                
                setTimeout(() => {
                    console.log("Step 5: Serve tea");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);