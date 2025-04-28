// 2. 임의의 2개의 수(40 ~ 70)를 생성. 
// 출력결과 예시 : "2개의 수 중에서 큰값은 ??, 작은값은 ??"

let result = 40 + Math.floor(Math.random() * 31)
let result1 = 40 + Math.floor(Math.random() * 31)
console.log(result, result1);

if (result > result1) {
<<<<<<< HEAD
  console.log("2개의 수 중에서 큰 값은 :" + result + "작은 값은 :" + result1);
} else if (result < result1) {
  console.log("2개의 수 중에서 큰 값은 :" + result1 + "작은 값은 :" + result);
=======
  console.log("2개의 수 중에서 큰 값은 :" + result);
} else if (result < result1) {
  console.log("2개의 수 중에서 큰 값은 :" + result1);
>>>>>>> 5e9ca3d5d210d765a0d7fe45263f830a27f26a2d
} else {
  console.log("두 수의 값이 동일합니다.");
}