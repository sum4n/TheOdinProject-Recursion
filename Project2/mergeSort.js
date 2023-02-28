// sort left half of the array (if n > 1);
// sort right half of the array (if n > 1);
// merge the two halves together.

let array = [9, 5, 4, 2, 3, 8, 7];

function mergeSort(array) {
  let aLength = array.length;
  let aHalfLength = Number.parseInt(aLength / 2);

  if (aLength == 0 || aLength == 1) return array;

  let leftHalf = array.slice(0, aHalfLength);
  //   console.log({ leftHalf });

  let rightHalf = array.slice(aHalfLength);
  //   console.log({ rightHalf });

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

// call main function
console.log(`[${array}] MergeSort: `);
console.log(mergeSort(array));
console.log(`[6,1,5,2,4,3] MergeSort: `);
console.log(mergeSort([6, 1, 5, 2, 4, 3]));

function merge(left, right) {
  //   console.log({ left, right });

  let leftLength = left.length;
  let rightLength = right.length;

  let mergedList = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftLength && j < rightLength) {
    if (left[i] < right[j]) {
      mergedList[k++] = left[i++];
    } else {
      mergedList[k++] = right[j++];
    }
  }
  for (; i < leftLength; i++) {
    mergedList[k++] = left[i];
  }
  for (; j < rightLength; j++) {
    mergedList[k++] = right[j];
  }

  return mergedList;
}

// Test the merge function
// let left = [5];
// let right = [2];
// console.log(merge(left, right));
