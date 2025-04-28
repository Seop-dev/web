// for3.js

let sum = 0; // 합
let avg = 0; // 평균
let count = 0; // 합한 횟수

for (let i = 1; i <= 5; i++) {
  let str = prompt("1~10까지의 숫자를 입력하세요.");
  let inputValue = parseInt(str); // "7" -> 7 문자열을 숫자열로
  // 누적
  if (inputValue >= 1 && inputValue <= 10) {
    sum += inputValue;
    count++;
  } else {
    console.log("1부터 10까지 입력");
  }
} //end of for
avg = sum / count; // 평균계산
console.log(`누적합계: ${sum} 입니다. 평균은: ${avg} 입니다.`);
// console.log("누적합게: " + sum + " 입니다.");