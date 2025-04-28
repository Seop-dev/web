// condition6exe.js
// 1. 2개의 수를 입력 받고 큰 값을 콘솔에 출력. 
// 출력 결과 예시 : "2개의 수 중에서 큰 값은 28입니다."
let num1 = Number(prompt("첫번째 수를 입력하세요."));
let num2 = Number(prompt("두번째 수를 입력하세요."));
console.log(num1, num2);

<<<<<<< HEAD
// 2. 임의의 2개의 수(40 ~ 70)를 생성. 
// 출력결과 예시 : "2개의 수 중에서 큰값은 ??, 작은값은 ??"

// 3. codition3.js에 "A", "B", "C", "D", "F" => 95 이면 A+ 85이면 B+ .... D+ 까지

// 4. 반복문(P.537 연습)
=======
if (num1 >= num2 && num1 <= num2) {
  console.log("2개의 수 값이 동일합니다.")
} else if (num1 > num2) {
  console.log("2개의 수 중에 큰 값은 :" + num1);
} else if (num1 < num2) {
  console.log("2개의 수 중에 큰 값은 :" + num2);
} else{
  console.log("숫자를 입력해 주세요.");
}
>>>>>>> 5e9ca3d5d210d765a0d7fe45263f830a27f26a2d
