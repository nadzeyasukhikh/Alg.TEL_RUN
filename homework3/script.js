let arr = [100, 112, 256, 349, 770];
let arr1 = [72, 86, 113, 119, 265, 445, 892];
let arr2 = [];

function findNumber(arr,arr1, k) {
  arr.forEach((el) => arr2.push(el));
  arr1.forEach((el) => arr2.push(el));
  arr2.sort((a, b) => a - b);
  return arr2[k - 1];
}

console.log(findNumber(arr,arr1, 7));
