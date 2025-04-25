// variable2.js
let num1 = 100; // int num1; 자바스크립트에서는 변수선언이 자유롭지만 자바에서는 문자는 불가
num1 = "hundred";
console.log(typeof num1); // tpyeof는 변수의 타입을 보여줄때 사용

let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); // O vs o
console.log(typeof birthOfDate); // 명확하지 않은 경우엔 object 타입

let isOK = true;
isOK = 10 < 5; // false
isOK = 10 > 5; // true

if (isOK) {
  // isOK 값이 true일 경우에 {} 블럭을 실행
  console.log('isOK는 참입니다.');
}

// 배열: [100, 200, 250] 여러개의 값을 저장
let numAry = [10, 20, 25, 31]; // 숫자열 배열
console.log(numAry[0]); // 인덱스는 첫번째가 0부터 시작

let strAry = ["Hello", "Nice", "Good", 300]; // 문자열 배열 
// 문자와 숫자를 함께 배열에 넣는건 가능하지만 가능한 숫자, 문자 분리해서 사용 25.04.25
console.log(strAry[2]);

// 객체(object). 키: 값의 형태.
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  personInfo: function() { // 함수는 기능
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
}
person.personInfo(); // 메소드 호출(call)

console.log(person.name);

// undefied, null
let whatIsThis;
whatIsThis = document.querySelector('#userValu');
console.log(typeof whatIsThis); // null도 object 값이다.