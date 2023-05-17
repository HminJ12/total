function fn1_1(param){
  console.log(param);
}
function fn1_2(event){
  console.log(event.target);
}
//(event.target)이 this임
//onclick에서 event는 약속된 파라미터이다
//event는 이벤트리스너이다
/*
$(document).ready(function(){

}) 
$(window).load(function(){

}) 다운로드가 다 끝났을 때 
window.addEventListener(`load`,function(){

}) 바닐라 스크립트에서 */

document.addEventListener(`DOMContentLoaded`,function(){
  document.querySelector(`.ex2 button`).addEventListener(`click`,function(){
    alert()
  }) //click 첫번째 것만 나온다
  //document.querySelectorAll(`.ex2 button`) ->배열

  document.getElementById(`ex2btn`).addEventListener(`click`,function(){
    alert()
  }) //click id로 찾을 때 사용, 하나만 찾을 때 사용

  /* document.getElementsByClassName(`ex2btn`).addEventListener(`click`,function(){
    alert()
  }) 
  //click class로 찾을 때 사용하는데 배열 찾을 때 사용하는 거임 
  document.getElementsByTagName(`div`) -> 배열*/

  document.querySelector(`.ex2btn`).addEventListener(`click`,function(a){
    console.log(a.target);
  })
  

}) //loaded 

//이벤트 연결
//프리로드
