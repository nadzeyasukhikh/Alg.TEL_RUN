function foo(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            arr.push(arr1[i++])
        } else {
            arr.push(arr2[j++])
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i++])
    }
    while (j < arr2.length) {
        arr.push(arr2[j++])
    }
    return arr;
}
function fooSort(arr) {
    if(arr.length <= 1) return arr;
    let left = arr.slice(0, Math.floor(arr.length / 2));
    let right = arr.slice(Math.floor(arr.length / 2));
    return foo(fooSort(left), fooSort(right));
}
 let array = [7,4,6,9,1,3,2,5,8]
 console.log(fooSort(array));