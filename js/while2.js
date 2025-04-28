// while2.js
// 사용자에게 1 ~ 10 까지 임의의 수를 입력.
// 범위 외의 숫자 입력시 종료. 입력값의 누적합을 콘솔출력.

let sum = 0;

while(true){
  let str = parseInt(prompt("1 ~ 10 값을 입력해주세요."));
  if(str < 1 || str > 10){
    break;
  } else{
    sum += str;
  }
}
console.log(`누적 입력값의 합은 : ${sum} 입니다.`);
