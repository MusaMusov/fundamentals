function solve(num, array1) {
    let array2 = [];
    for(let i = 0; i < num; i++) {
        array2.push(array1[i]);
    }

    let buff = "";
    for(let m = array2.length - 1; m >= 0; m--) {
        buff += array2[m] + " ";
    }

    console.log(buff);
}

solve(3, [10, 20, 30, 40, 50])