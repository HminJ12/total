/* 
var의 문제점
함수레벨 스코프
호이스팅 :변수나 함수를 첫 순위로 이동시킴
동일한 이름의 변수의 중복선언이 가능

console.log(a);
var a = 1


var a
console.log(a);
a = 1 


let
block레벨 스코프
호이스팅이 발생하지 않는다 (호이스팅의 발생 여부)
동일한 이름의 변수의 중복선언이 불가능

const
block레벨 스코프
호이스팅이 발생하지 않는다
동일한 이름의 변수를 중복선언이 불가능하며 값을 변경할 수 없음, 단 객체의 키값은 수정 가능
선언시 반드시 초기값을 입력
*/

var a = 1
document.querySelector(`.ex1 .btn1`).addEventListener(`click`,function(){
  var a = 2
  if(a===2){
    var a = 3
  }
  console.log(a);
}) //click

document.querySelector(`.ex1 .btn2`).addEventListener(`click`,function(){
  console.log(a);
}) //click



let b = 1

document.querySelector(`.ex2 .btn1`).addEventListener(`click`,function(){
  let b = 2
  if(b === 2){
    let b = 3
  }
  console.log(b);
}) //click

document.querySelector(`.ex2 .btn2`).addEventListener(`click`,function(){
  console.log(b);
}) //click

사람 = {
  이름 : '홍길동',
  나이 : 24
}

사람.이름 = '아무개'

console.log(사람.이름);
