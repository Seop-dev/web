// while3.js
// 친구이름을 입력. => quit 라는 값을 넣으면 종료.
// table 형식으로 만들기

// 화면요소를 삭제하는 함수
function removeElement(parameter1){
  console.dir(parameter1.target.parentElement.parentElement);
  parameter1.target.parentElement.parentElement.remove(); //제거
}


let str = `<table class="table">
            <tbody>`;
while (true) {
  // 사용자의 입력값을 반을 변수.
  let userValue = prompt("이름 입력");
  if (userValue == "quit") {
    break; //종료
  }
  //코드의 실행 흐름을 종료
  // continue; //아랫부분 실행 안하고 처음으로 다시 돌아가서 반복문 실행

  str += `<tr><td>${userValue}</td>
              <td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button></td>
              </tr>`;
} // end of while.
str += `</tbody></table>`;
document.write(str);