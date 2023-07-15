function songs(arr) {
    let songs = arr.shift();
    let wantedType = arr.pop();
    let finalSongs = [];
    
    class Songs {
        constructor(typeList, name, time) {
            this.type = typeList,
            this.name = name,
            this.time = time
        }
    }

    for(let i = 0; i < songs; i++) {
        let currSong = arr[i];
        let currInfo = currSong.split("_")
        let currType = currInfo[0];
        let currName = currInfo[1];
        let currTime = currInfo[2];

        let newSong = new Songs(currType, currName, currTime);
        if(wantedType === currType || wantedType === "all") {
            finalSongs.push(currName)
        }
        
    }

    console.log(finalSongs.join("\n"));

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])