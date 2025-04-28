// for2.js

// 1 ~ 10까지 반복
// 2의 배수, 3의 배수 => 2의 배수는 sum2에 저장
//                      3의 배수는 sum3에 저장
// 출력 : 2의 배수의 합은 ?? , 3의 배수의 합은 ??
let sum2 = 0, sum3 = 0;
for (let i = 1; i <= 10; i++){
  // 2의 배수
  if(i % 2 == 0 ){
    sum2 = sum2 + i;
  } 
  // 3의 배수
  if ( i % 3 == 0){
    sum3 = sum3 + i;
  }
}
console.log("2의 배수의 합은 : " + sum2);
console.log("3의 배수의 합은 : " + sum3);