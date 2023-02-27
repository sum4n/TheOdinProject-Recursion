function fibs(num) {
  let resultArray = [0, 1];

  if (num <= 0 || !Number.isInteger(num)) {
    return "Please enter a number greater than 0.";
  }
  if (num == 1) {
    return [0];
  }
  if (num == 2) {
    return resultArray;
  }

  for (let i = 2; i < num; i++) {
    let arrayLength = resultArray.length;
    let pushedNum = resultArray[arrayLength - 2] + resultArray[arrayLength - 1];
    resultArray.push(pushedNum);
  }

  return resultArray;
}

console.log("fibs(8): ");
console.log(fibs(8));
console.log("fibs(20): ");
console.log(fibs(20));
