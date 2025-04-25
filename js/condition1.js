//condition1. js
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 && num2++ == 10;
isTrue = ++num2 % 2; // true / false => truthy / falsy (0, "공백", null, undefied, NaN)
console.log(num1, num2);

if (isTrue) {
  // isTrue의 값이 참 => if 블럭 실행.
  console.log('참');
} else {
  // isTrue의 값이 거짓 => else 블럭 실행.
  console.log('거짓');
}