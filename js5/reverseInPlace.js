function solve(array) {
    let buff = "";
    for(let i = array.length - 1; i >= 0; i--) {
        buff += array[i] + " ";
    }
    console.log(buff);
}