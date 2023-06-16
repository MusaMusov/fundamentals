function bombNums(arr, bombNumArray) {
    let bombNumber = bombNumArray[0];
    let sequence = bombNumArray[1];
    for(let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        let start = i - sequence;
        if(curNum === bombNumber) {
            if(start < 0) {
                start = 0
            }
            arr.splice(start, (sequence * 2) + 1);
            i = 0;
        }
    } 
    
    let sum = 0;

    for(let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }

    console.log(sum);
}

bombNums([2,1,1],[1,0])