
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


  
  function merge(arr1, arr2) {
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
    return arr;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let left = arr.slice(0, Math.floor(arr.length / 2));
    let right = arr.slice(Math.floor(arr.length / 2));
    return  merge(mergeSort(left), mergeSort(right));
  }
  
  let array = [6, 5, 4, 3, 2, 1];
  console.log(mergeSort(array));

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








