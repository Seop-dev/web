// variable4.js
// 연산자()

let num1 = "10";
num1 = num1 + "20"; // "1020"
num1 = num1 + "30"; // "102030"
console.log(num1);

num1 += "40"; // num1 = num1 + "40";

let num2 = 10; // number type
num2 += 20;
num2 += 30;

num2 = num2 - 5; // 55
num2 -= 5; // 50
console.log(num2);

num2 = num2 * 2;
num2 *= 2; // 200
num2 = 10203040;

// 비교 연산자
console.log(num2 == num1); // 동일
console.log(num2 === num1); // 동일

console.log(num2 != num1); // 값만 비교함. 같지 않아야 true
console.log(num2 !== num1); // 값과 타입 비교함. 하나라도 같지 않으면 true

// 논리연산자
console.clear();
console.log(num1 >= num2 || num1 < 100);
console.log(num1 >= num2 && !(num1 < 100));