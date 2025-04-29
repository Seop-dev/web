// function5.js

let names = ["이름", "이름2", "이름3", "이름4"];

let search = prompt("검색할 이름 입력: ");
// for( i = 0; i < names.length; i++){
//   if(search == names[i]){
//     alert('있음');
//     break;
//   } else{
//     alert('없음');
//   }
// }
let i = 0;
let exists = false; // 존재여부 확인 변수

while (true) {
  if (i == names.length) {} else {
    break;
  }
  if (search == names[i++]) { // 찾는 친구의 이름이 존재하는 경우
    exists = true;
    break;
  }
} // end of while

if (exists) {
  alert("있음");
} else {
  alert("없음");
}