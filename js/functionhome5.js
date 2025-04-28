// functionhome5.js

// 구구단 출력하기
// 주어진 숫자 n에 대해 n단의 구구단을 출력하는 함수를 작성하시오.

// 출력 예시
// printMultiplicationTable(2); 
// 출력:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18

// 내가 쓴 코드
function printMultiplicationTable(n){
  let result = 0;
  for (let i = n; i <= n; i++){
    for (let j = 1; j <= 9; j++){
      result = i * j;
      document.write(`<p>${i} * ${j} = ${result}</p>`);
    }
  }
}
printMultiplicationTable(5);

// 수정 코드
// function printMultiplicationTable(n) {
//   for (let j = 1; j <= 9; j++) {
//     let result = n * j;
//     document.write(`<p>${n} x ${j} = ${result}</p>`);
//   }
// }

// printMultiplicationTable(5);