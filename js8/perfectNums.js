function perfectNums (num) {
    let sum = 0;
    for(let i = 1; i <= num / 2; i++) {
        if(num % i === 0) {
            sum += i;
        }
    }
    if(num > 0 && sum === num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

perfectNums(6)