function solve(arr) {
    let kElement = arr.shift();

    let firstK = arr.slice(0, kElement);
    let lastK = arr.slice(arr.length - kElement);

    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}