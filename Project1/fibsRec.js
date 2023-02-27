function fibsRec(num) {
  if (num == 0) return [];
  if (num <= 1) return [0];
  if (num == 2) return [0, 1];

  return [
    ...fibsRec(num - 1),
    fibsRec(num - 1).at(-1) + fibsRec(num - 2).at(-1),
  ];
}

console.log("fibsRec(8): ");
console.log(fibsRec(8));
console.log("fibsRec(20): ");
console.log(fibsRec(20));
