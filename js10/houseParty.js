function party(arr) {
    let partyListArr = [];

    for(let i = 0; i < arr.length; i++) {
        let curPerson = arr[i].split(" ");
        
        if(curPerson.includes("not")) {
            let curName = curPerson[0];
            if(partyListArr.includes(curName)) {
                let nameIndex = partyListArr.indexOf(curName);
                partyListArr.splice(nameIndex,1);
            } else {
                console.log(`${curName} is not in the list!`);
            }
        } else {
            if(!partyListArr.includes(curPerson[0])) {
                partyListArr.push(curPerson[0]);
            } else {
                console.log(`${curPerson[0]} is already in the list!`);
            }
        }
    }
    partyListArr.forEach(element => {
        console.log(element);
    });
}

party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])