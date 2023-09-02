function quickSort(arr){
    if(arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let index = 0;
    for(let i = 0; i< arr.length - 1; i++) {
        if(arr[i] < pivot) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
       index++;
        }
    }
    [arr[arr.length - 1], arr[index]] = [arr[index], arr[arr.length - 1]];
    return [
        ...quickSort(arr.slice(0, index)),
        pivot,
        ...quickSort(arr.slice(index + 1)),
    ];
 }
 let array = [1, 6, 5, 4, 3, 2];
 console.log(quickSort(array));