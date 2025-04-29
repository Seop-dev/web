// function4.js
// 함수 + 반복문 + 배열 :

let num = 10;
num = "10, 홍길동";
let numAry = [10, 20]; // new Array();
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "lee"; // (X) 웬만하면 숫자열과 문자열을 같이 넣는건 X
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;

console.log(numAry[4]); // index에 저장된 배열에 출력 할 값 기입
console.log(`배열의 크기: ${numAry.length}`); // 배열의 크기 (length)

// 배열 + for 반복문

for (let i = 0; i < numAry.length; i++) {
  console.log(`[i]의 값: ${i}, 배열의 값: ${numAry[i]}`);
}

// 연산가능

console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

// 배열 요소의 합

let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  sum += numAry[i];
}
console.log(`sum => ${sum}`);

let sum1 = 0;
for (let i = 0; i < numAry.length; i++) {
  // 1,3,5,7 번째만 합
  // if( i % 2 === 0){
  //   sum1 += numAry[i];
  // }
  // 값중에서 50보다 큰 값 일때만합 
  if (numAry[i] > 50) {
    sum1 += numAry[i];
  }
}
console.log(`sum1 => ${sum1}`);

// 배열 변수: ages => 27, 28, 25, 30, 31, 36
// max(초기값: 0)
let agesAry = [27, 28, 25, 30, 31, 36];
// 함수 : getMax()
function getMax(para1 = []) {
  let max = 0;
  for (let j = 0; j < para1.length; j++) {
    if (para1[j] > max) {
      max = para1[j];
    }
  }
  console.log(`max => ${max}`);
}
// 함수 실행
getMax(agesAry);
getMax([30, 17, 22, 24, 27]);

// 함수 getMinValue(매개값으로 배열)
// 가장 작은 값 구하기
let result = getMinValue([20, 27, 17, 30]);  
// 함수 : getMinValue()
function getMinValue(result = []){
  let min = result[0]; // 최소값 지정
  for (let j = 0; j < result.length; j++) {
    if (result[j] < min) {
      min = result[j];
    }
  }
  return min;
}
console.log(`result => ${result}`);
