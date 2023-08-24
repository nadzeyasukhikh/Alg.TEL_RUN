// let arr = [100, 112, 256, 349, 770];
// let arr1 = [72, 86, 113, 119, 265, 445, 892];
// let result = [];

// function findNumber(arr,arr1, k) {
//   arr.forEach((el) => result.push(el));
//   arr1.forEach((el) => result.push(el));
//   result.sort((a, b) => a - b);
//   return result[k - 1];
// }

// console.log(findNumber(arr,arr1, 7));

function merge(arr1, arr2, k) {
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i++]);
    } else {
      arr.push(arr2[j++]);
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    arr.push(arr2[j++]);
  }
  return arr[k -1];
}

let array1 = [1, 3, 5, 7, 20, 25];
let array2 = [2, 4, 6, 10, 12];
console.log(merge(array1, array2, 7));