// functionhome7.js
// friends 배열에서 "이름이 최진미 사람" 을 모두 찾아서 콘솔에 출력해보세요.

let friends = [
  { name: "김지훈", age: 28, phone: "010-1234-0000" },
  { name: "박지민", age: 31, phone: "010-2345-1111" },
  { name: "최유리", age: 26, phone: "010-3456-2222" },
  { name: "최진미", age: 22, phone: "010-6656-4422" },
  { name: "최진미", age: 22, phone: "010-6656-4422" }
];

for (let i = 0; i < friends.length; i++){ 
  if(friends[i].name === "최진미"){
    console.log(friends[i]);
  }
}

