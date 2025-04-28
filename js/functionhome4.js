// functionhome4.js

// 1부터 n까지의 숫자 중에서 3의 배수와 5의 배수를 제외한 값들의 합 구하기
// 1부터 n까지의 숫자 중에서 3의 배수와 5의 배수를 제외하고 나머지 숫자들을 더하는 함수를 만들어라

// 출력 예시
//console.log(sumExclude3And5(10)); 
// 출력: 27 (1 + 2 + 4 + 7 + 8 = 27, 3과 5는 제외)
//console.log(sumExclude3And5(15)); 
// 출력: 60 (1 + 2 + 4 + 7 + 8 + 11 + 13 = 60, 3, 5, 6, 9, 10, 12, 15는 제외)

function sumExclude3And5(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0){
      total += i;
    }
  }
  return total;
}
console.log(sumExclude3And5(15));