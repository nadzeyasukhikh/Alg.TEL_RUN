const num = [2, 4, 7, 2, 11,  7, 15, 4, 13, 15, 13, 11, 17];
num.sort((a, b) => a -b);

function findElement(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    // while (start < end)
    for (i = 0; i < end; i++)
     {
        
      let mid = Math.floor((start + end) / 2);
  
      if (mid % 2 === 1) {
        mid--;
       
      }
  
      if (arr[mid] !== arr[mid + 1]) {
       
        end = mid;
        
      } else {
       
        start = mid + 2;
      }
    }
    
    return arr[start];
  }
  
 
  const element = findElement(num);
  console.log(element);