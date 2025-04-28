// functionhome3.js

// 1부터 n까지 짝수만 더하기
// 1부터 n까지 숫자 중에서 짝수만 더하는 sumEven(n) 함수를 만들어라.

// 출력 예시
// console.log(sumEven(6)); 
// // 출력: 12 (2+4+6)

// console.log(sumEven(10)); 
// // 출력: 30 (2+4+6+8+10)

function sumEven(n){
  let total = 0;
  for (let i = 1; i <= n; i++ ){
    if( i % 2 === 0){
      total += i;
    }
  }
  return total;
}
console.log(sumEven(10));