
// let arr = [0,1,1,1,0,1,1,1,0];
// let count = 0;

// arr.forEach((el) => {
//     if (el === 0) {
//         arr[count] = 0;
//         count++;
//     }
// });

// for(let i = count; i < arr.length; i++) {
//     arr[i] = 1;
// }

// console.log(arr);

// function H(n,A,C,B) {
//     if (n < 1) throw new Error("The number can't be non-positive");
//     if (n == 1) return A + C + " ";
//     return H(n - 1,A,B,C) + A + C + " " + H(n - 1, B, C, A)
// }
// console.log(H(1, "A", "B", "C"));


  
  // function merge(arr1, arr2) {
  //   let i = 0;
  //   let j = 0;
  //   let arr = [];
  //   while (i < arr1.length && j < arr2.length) {
  //     if (arr1[i] < arr2[j]) {
  //       arr.push(arr1[i++]);
  //     } else {
  //       arr.push(arr2[j++]);
  //     }
  //   }
  //   while (i < arr1.length) {
  //     arr.push(arr1[i++]);
  //   }
  //   while (j < arr2.length) {
  //     arr.push(arr2[j++]);
  //   }
  //   return arr;
  // }
  //   let array1 = [1, 3, 5, 7, 8];
// let array2 = [2, 4, 6, 9, 12, 15];
// console.log(merge(array1, array2));
  
  // function mergeSort(arr) {
  //   if (arr.length <= 1) return arr;
  //   let left = arr.slice(0, Math.floor(arr.length / 2));
  //   let right = arr.slice(Math.floor(arr.length / 2));
  //   return  merge(mergeSort(left), mergeSort(right));
  // }
  
  // let array = [6, 5, 4, 3, 2, 1];
  // console.log(mergeSort(array));






// arr = [7, 8, 1, 2, 3, 4, 5, 6,]
// next = (mid +1) % arr.length
// prew =(mid -1 + arr.length) % arr.length

// function findInd(arr) {
//     let start = 0, end = arr.length - 1;
    
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (mid < end && arr[mid] > arr[mid + 1]) {
//             return mid + 1;
//         }

//         if (arr[start] <= arr[mid]) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//    return -1
// }

// let arr = [7, 8, 1, 2, 3, 4, 5, 6];
// console.log(findInd(arr)); 


// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let array = [1, 6, 5, 4, 3, 2];
// console.log(quickSort(array));




// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let pivot = arr[arr.length - 1];
//   let index = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       [arr[i], arr[index]] = [arr[index], arr[i]];
//       index++;
//     }
//   }
//   [arr[arr.length - 1], arr[index]] = [arr[index], arr[arr.length - 1]];
//   return [
//     ...quickSort(arr.slice(0, index)),
//     pivot,
//     ...quickSort(arr.slice(index + 1)),
//   ];
// }

// let array = [1, 6, 5, 4, 3, 2];
// console.log(quickSort(array));

function findNum(arr) {
   
  let sum = 0;
  let sum1 = 0;

  for (let i = 1; i <= arr.length - 1; i++) {
      sum += i;
  }

  
  for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i];
  }

  return sum1 - sum;
}

const arr = [2, 4, 3, 1, 5, 5, 6, 8, 7, 9];
console.log(findNum(arr)); 
