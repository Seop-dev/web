// variable3.js
// 연산자(+, -, /, *, %)

let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); // "30" -> 30 문자열이 숫자로 변경
num2 = parseInt(num2); // "17" -> 17 문자열이 숫자로 변경

let result = num1++ + --num2; // 30 + 17 = 47 이지만 문자열일 경우엔 "30" + "17" = "3017" 연결되어버림
// 숫자 취급을 하기 위해선 parseInt() 함수 사용해야함
console.log(result, num1, num2);

// result 값을 input#result의 value 속성에 대입.
document.querySelector('#result').value = result;