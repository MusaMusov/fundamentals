function solve(input) {
  let template = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
  let matched = input.match(template);
  let destinationsArr = [];
  let totalPoints = 0;

  if (matched) {
    for (let line of matched) {
      line = line.replace(/\W/g, "");
      totalPoints += line.length;
      destinationsArr.push(line);
    }
  }
  console.log(`Destinations: ${destinationsArr.join(", ")}`);
  console.log(`Travel Points: ${totalPoints}`);
}

solve("ThisIs some InvalidInput");
