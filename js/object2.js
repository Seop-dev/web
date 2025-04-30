// object2.js
// 배열내장객체: new Array() 또는[]
// 관련메소드: push, pop, unshift, shift => forEach.

let arr1 = [10, 20, 30]; // new Array(); //
arr1[3] = 40;
arr1.push(50); // 추가 메소드
arr1.unshift(60);
// 60, 10, 20, 30, 40, 50
arr1.pop(); // 60, 10, 20, 30, 40
arr1.pop(); // 60, 10, 20, 30
arr1.shift(); // 10, 20, 30
// 10, (15, ) 20, 30
arr1.splice(1, 0, 15, 16, 17); // 추가, 수정, 삭제 모두 가능 1. index 위치. 2. 몇개를 바꿀지. 3... 넣을 값들

// every(모두 만족), some(하나라도 만족)
let result = arr1.some(item => item % 2 == 1);
console.log(result);

// **forEach**
arr1.forEach(function (item, idx, ary) { // 익명함수
  console.log(item, idx);
});

console.log(arr1);