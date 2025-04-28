// functionhome.js

//숫자 하나를 매개변수로 받아서, 짝수면 "짝수입니다." 홀수면 "홀수입니다."를 출력하는 함수를 만들어라.
// // 예시 실행
// checkNumber(4); // 출력: 짝수입니다.
// checkNumber(7); // 출력: 홀수입니다.


function checkNumber(num){
  if( num % 2 == 1){
    console.log(`홀수`);
  } else if ( num % 2 == 0){
    console.log(`짝수`);
  }
}
checkNumber(3);