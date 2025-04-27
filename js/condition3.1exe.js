// condition3.js
// 3. codition3.js에 "A", "B", "C", "D", "F" => 95 이면 A+ 85이면 B+ .... D+ 까지
// 30 ~ 100 사이의 점수
let result = 30 + Math.floor(Math.random() * 71); // 0 <= x < 71
console.log(result);
// 100 ~ 90 => "A"
// ~ 80 => "B"
// ~ 70 => "C"
// ~ 60 => "D" 그외 "F"

if (result >= 95) { // 90 <= x <= 100
  console.log("A+");
} else if (result >= 90) { // 90 <= x <= 90
  console.log("A");
} else if (result >= 85) {
  console.log("B+");
} else if (result >= 80) {
  console.log("B");
} else if (result >= 75){
  console.log("C+");
} else if (result >= 70){
  console.log("C");
} else if (result >= 65){
  console.log("D+");
} else if (result >= 60){
  console.log("D");
} else{
  console.log("F");
}

// if (result >= 60) {
//   console.log('pass');
// } else {
//   console.log('fail');
// }