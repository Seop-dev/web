// functionhome2.js

// functionhome1.js => while 문으로 작성
function sumUp(n){
  let total = 0;
  let i = 1;

  while( i <= n){
    total += i;
    i++;
  }
  return total;
}
console.log(sumUp(6));

