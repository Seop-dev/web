// functionhome8.js
// 친구 중에서 나이가 25살 이상인 친구들만 출력하기

let friends = [
  { name: "김지훈", age: 28, phone: "010-1234-0000" },
  { name: "박지민", age: 31, phone: "010-2345-1111" },
  { name: "최유리", age: 26, phone: "010-3456-2222" },
  { name: "최진미", age: 22, phone: "010-6656-4422" },
  { name: "이수빈", age: 24, phone: "010-7777-8888" }
];


for ( i = 0; i < friends.length; i++){
  if (friends[i].age >= 25){
    console.log(friends[i]);
  } 
}
