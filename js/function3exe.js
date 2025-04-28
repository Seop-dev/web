// function3exe.js
// 1. max(10 ,7) => "2개의 숫자중에서 큰 값은 10 입니다."

function max(num1, num2) {
  let total = 0;
  if (num1 > num2) {
    total = num1;
  } else{
    total = num2;
  }
  return total;
}
let result = max(14, 16);
console.log(`2개의 숫자중에서 큰 값은 ${result} 입니다.`);

// 2. sumUpTo(5) => "1부터 5까지의 합은 15입니다."

// function sumUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i; // 누적 합
//   }
//   return total;
// }
// let result = sumUpTo(5);
// console.log(`1부터 6까지의 합은 ${result}입니다.`);


// // 3. diff(34, 17) => "두수의 차는 17입니다." (큰 수에서 작은 수 빼기)

// function diff(num1, num2){
//   let result = 0;
//   if (num1 > num2) {
//     result = num1 - num2;
//   } else {
//     result = num2 - num1;
//   }
//   return result;
// }
// let result = diff(10, 20);
// console.log(`두 수의 차는 ${result} 입니다`);
 