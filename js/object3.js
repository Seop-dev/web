// object3.js
// indexOf()

let numArr = [10, 21, 33, 54, 16, 73]
let result = numArr.indexOf(333); // -1은 찾는 요소가 없음
console.log(result);

let strAry = ["홍길동", "김길동", "홍길순"];
strAry.forEach(function(item){
  if(item.indexOf("홍") == 0 ){ // 성씨가 "홍"씨인 사람
    console.log(item);
  }
});

// numAry(변수) => 10 ~ 50 사이의 값을 10개 저장. => 콘솔에 출력(forEach);
let numAry = [];
for (let i = 0; i < 10; i++){
  let num = 10 + Math.floor(Math.random() * 41);
  numAry.push(num);
}

// 10 ~ 50 사이의 값이 정상적으로 생성 되는지 체크 : every()
result = numAry.every(function (item){
  if(item >= 10 && item <= 50){
    return true;
  } else {
    return false;
  }
})
console.log(result);

// return item >= 10 && item <= 50;
numAry.forEach(function(num, idx){
  console.log(`${idx + 1}번째 값: ${num}`);
});
