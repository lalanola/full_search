const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 39;
let apply = false;
outerLoop: for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      for (let m = 0; m < arr.length; m++) {
        apply = true;
        break outerLoop;
      }
    }
  }
}
if (apply) {
  console.log("Yes");
} else {
  console.log("No");
}
