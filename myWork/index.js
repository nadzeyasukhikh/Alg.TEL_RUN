function foo(arr) {
    let start = 0;
    let end = arr.length -1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
      if(arr[mid] === 60) {
        return mid
      } else if(arr[mid] < 60) {
        start = mid + 1
      } else {
        end = mid -1
      }
    }
    return -1
}
const arr = [2, 4, 7, 10, 15, 19, 24, 30, 35, 40, 48, 50, 56, 58, 60, 65, 70, 72, 78, 80, 85, 90, 95, 100];
console.log(foo(arr))