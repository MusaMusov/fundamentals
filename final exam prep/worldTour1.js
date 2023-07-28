function solve(arr) {
  let stops = arr.shift();
  arr.pop();
  for (const line of arr) {
    let [command, arg1, arg2] = line.split(":");
      if (command === "Add Stop") {
        if (Number(arg1) >= 0 && Number(arg1) < stops.length) {
          stops = stops.slice(0, Number(arg1)) + arg2 + stops.slice(arg1);
        }
      } else if (command === "Remove Stop") {
        if (
          Number(arg1) >= 0 &&
          Number(arg1) < stops.length &&
          Number(arg2) >= 0 &&
          Number(arg2) < stops.length
        ) {
          stops = stops.slice(0, Number(arg1)) + stops.slice(Number(arg2) + 1);
        }
      } else if (command === "Switch") {
        stops = stops.replace(arg1, arg2);
      }
      console.log(stops);
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])
