// function8.js
// 1. JSON.parse vs JSON.stringify

console.log(json); // 문자열
let data = JSON.parse(json); // json 문자열 -> 객체로 변환
console.log(data); // 객체

console.clear(); // 로그 지우기.

// button<삭제> 템플릿.
let btnTemplate = "<button class='btn btn-danger' onclick = 'deleteTr(event)'>삭제</button>";



// 사원목록(table형식)을 출력.
let fields = ['id', 'first_name', 'gender', 'salary'];
let elist = "<table class = 'table'><thead><tr>";
for (let field of fields) {
  elist += `<th>${field}</th>`;
}
elist += '<th>삭제</th>';
elist += "</tr></thead><tbody>";
for (let emp of data) {
  // console.log(emp);
  elist += makeTr(emp);
}
elist += "</tbody></table>";
document.write(elist);

/////////////////////////////////////
// 이벤트

// 1. 버튼 클릭 이벤트
document.querySelector('button#searchBtn').addEventListener('click', function(){
  // 입력값
  let searchValue = document.querySelector('#userValue').value;
  let list = "";
  for (let emp of data){
    if (searchValue == 'All' || searchValue == emp.gender){
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
});

// 2. select "change";
document.querySelector('select#selectGender').addEventListener('change', function(){
  // 입력값
  console.log(this);
  let searchValue = document.querySelector('#selectGender').value;
  let list = "";
  for (let emp of data){
    if (searchValue == 'All' || searchValue == emp.gender){
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
});

// tr을 생성하는 함수.
function makeTr(emp = {}) {
  let str = "<tr>";
  // 속성을 정의.
  let fields = ['id', 'first_name', 'gender', 'salary'];
  for (let field of fields) {
    // console.log(emp[field]); // emp['id'] == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplate}</td>`;
  str += "</tr>";
  return str;
}

// 삭제 동작
function deleteTr(event) {
  const row = event.target.closest('tr');
  if (row) row.remove();
}

// function deleteTr(event){
//   console.log(event);
//   e.target.parentElement.parentElement.remove();
// }