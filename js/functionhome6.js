// functionhome6.js
// 주어진 friends 배열에서 가장 나이가 많은 사람의 이름을 출력하는 코드를 작성하세요.

let friends = [
  { name: "김지훈", age: 28, phone: "010-1234-0000" },
  { name: "박지민", age: 31, phone: "010-2345-1111" },
  { name: "최유리", age: 26, phone: "010-3456-2222" },
  { name: "최진미", age: 22, phone: "010-6656-4422" }
];

let max = 0; // 비교를 위해 max 값 변수 0으로 선언
let oldfriend = ""; // 친구 이름을 저장할 변수

for (let i = 0; i < friends.length; i++){ // 반복문 시작
  if(friends[i].age > max){ // max값과 친구배열의 나이값 비교
    max = friends[i].age; // max 값 갱신
    oldfriend = friends[i].name; // oldfriend 값 갱신
  }
}

console.log(`가장 나이가 많은 친구는 ${oldfriend}이고, 나이는 ${max}살입니다.`);