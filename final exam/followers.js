function solve(arr) {

    let followersArr = [];

    for (const line of arr) {
        let [command, ...info] = line.split(":");
        if(command === "New follower") {
            let name = info[0];
            let followerFinder = followersArr.find((m) => m.name === name);
            if(followerFinder) {

            } else {
                followersArr.push({name, likes : 0, comments: 0});
            }
        } else if(command === "Like") {
            let [name, likes] = info;
            likes = Number(likes);
            let followerFinder = followersArr.find((m) => m.name === name);
            if(followerFinder) {
                followerFinder.likes += likes;
            } else {
                followersArr.push({name, likes, comments: 0});
            }
        } else if(command === "Comment") {
            let name = info[0];
            let followerFinder = followersArr.find((m) => m.name === name);
            if(followerFinder) {
                followerFinder.comments++;
            } else {
                followersArr.push({name, likes : 0, comments: 1});
            }
        } else if(command === "Blocked") {
            let name = info[0];
            let followerFinder = followersArr.find((m) => m.name === name);
            if(followerFinder) {
                followerFinder.name = undefined;
            } else {
                console.log(`${name} doesn't exist.`);
            }
        } else if(command === "Log out") {
            break;
        }
    }
    let followerCounter = 0;
    for (const line of followersArr) {
        if(line.name) {
            followerCounter++;
        }
    }
    console.log(`${followerCounter} followers`);
    for (const line of followersArr) {
        if(line.name) {
            console.log(`${line.name}: ${line.likes + line.comments}`);
        }
    }
}

solve((["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"]))