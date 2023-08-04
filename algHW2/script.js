// Написать функцию, вычисляющую сумму тех чисел в диапазоне от 1 до n, 
// которые делятся на m.

// а) через цикл

// function sumNumbers(n, m) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % m === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// const result = sumNumbers(20, 3);

// console.log(result);

// б) через рекурсию

// function sumNumbers(n, m, current = 1, sum = 0) {
//     if (current > n) {
//       return sum;
//     }
  
//     if (current % m === 0) {
//       sum += current;
//     }
  
//     return sumNumbers(n, m, current + 1, sum);
//   }
  
//   const result = sumNumbers(20, 3);
//   console.log(result);


  
// Вычислить n-й член последовательности, заданной формулами:
// a(2n) = a(n) + a(n-1),
// a(2n+1) = a(n) — a(n-1),
// a(0) = a(1) = 1.

// Решение через рекурсию


function sequence(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else if (n % 2 === 0) {
      return sequence(n / 2) + sequence(n / 2 - 1);
    } else {
      return sequence((n - 1) / 2) - sequence((n - 1) / 2 - 1);
    }
  }
  const recursive = sequence(10);
  console.log(recursive);


  // Решение с оптимизацией методом мемоизации
  
  function sequence(n, sum = 0) {
        if (sum >n) {
          return sum;
        }
      
        if (n === 0 || n === 1) {
          return 1;
        } else if (n % 2 === 0) {
          return sequence(n / 2,sum) + sequence(n / 2 - 1, sum);
        } else {
          return sequence((n - 1) / 2, sum) - sequence((n - 1) / 2 - 1, sum);
        }
      
      }
      const memoized = sequence(5);
     
      console.log(memoized);
  