function loading(percentage) {

    let loadingArray = [];

    for(let i = 10; i <= 100; i += 10) {

        if(i <= percentage) {
            loadingArray.push("%")
        } else {
            loadingArray.push(".")
        }
    }
    if(percentage < 100){
        console.log(`${percentage}% [${loadingArray.join("")}]`);
        console.log("Still loading...");
    } else{
        console.log("100% Complete!");
        console.log(`[${loadingArray.join("")}]`);
    }
}

loading(100)