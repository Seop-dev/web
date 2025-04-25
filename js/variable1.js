// variable1.js
// JS 주석문.
/*
주석문 : 486p ~ 480p 읽기.
*/
// 데이터베이스 관리 시스템(DBMS) - 오라클
// 정보 -> frontend -> backend -> oracle
// 변수(variable) - 데이터타입(문자, 숫자, boolean, object, 배열)
let name; // 변수 선언. let으로 name 이라는 변수 선언<< (변수는 중복선언 불가)
name = "이동섭"; // 값을 대입(할당)
let name1 = "이동섭"; // 변수 초기화 : 선언하면서 값을 넣어줌
name = "김민수";
console.log(name);

const age = 20; // const는 상수(변하지 않는 값) 변수선언 & 초기화
// age = 30;  // 30 할당

// 선택자(selector)
let item = document.querySelector('#userValue');
console.log(item);
name = item.value; // value를 name이라는 변수에 담음 // 변수 할당
console.log(name);