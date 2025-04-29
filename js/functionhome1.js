// functionhome1
// 숫자 n을 매개변수로 받는다.
// 1 + 2 + 3 + ... + n 까지의 합을 구해서 리턴하는 함수를 만들어라.

// console.log(sumUp(5)); 
// 출력: 15 (1+2+3+4+5)

// console.log(sumUp(10)); 
// 출력: 55 (1+2+3+...+10)

function sumUp(n){
  let total = 0;
  for ( let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}
console.log(sumUp(5));

