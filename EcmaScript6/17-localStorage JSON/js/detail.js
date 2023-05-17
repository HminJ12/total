/*
let queryString = location.search
let params = new URLSearchParams(queryString)
let a = params.get(`a`)
let b = params.get(`b`)
let c = params.get(`c`)
console.log(a,b,c); 
*/

let queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get(`id`)

let todoArr = JSON.parse(localStorage.getItem(`todoArr`))
let obj = todoArr.find(v => parseInt(id) === v.id)

let {todoName, date, time, desc} = obj

document.querySelector(`.detail input[type=text]`).value = todoName
document.querySelector(`.detail input[type=date]`).value = date
document.querySelector(`.detail input[type=time]`).value = time
document.querySelector(`.detail textarea`).value = desc

document.querySelector(`.detail`).addEventListener('submit',e=>{
  e.preventDefault()
})

document.querySelector(`.detail .delete`).addEventListener(`click`,e=>{
  todoArr = todoArr.filter(v=>parseInt(id) !== v.id)
  //새 배열을 만든다
  //로컬스토리지에 똑같이 저장 동기화 시켜야 한다
  localStorage.setItem('todoArr', JSON.stringify(todoArr))
  location.href = './index.html' //새로고침, 리다이렉팅, 첫 페이지로 이동한다

})

document.querySelector(`.detail .edit`).addEventListener(`click`,e=>{
  let idx = todoArr.findIndex(v=>parseInt(id) === v.id)
  let todoName = document.querySelector(`.detail input[type=text]`).value
  let date = document.querySelector(`.detail input[type=date]`).value
  let time = document.querySelector(`.detail input[type=time]`).value
  let desc = document.querySelector(`.detail textarea`).value
  todoArr[idx].todoName = todoName
  todoArr[idx].date = date
  todoArr[idx].time = time
  todoArr[idx].desc = desc
  //다시 바꾼다
  localStorage.setItem('todoArr', JSON.stringify(todoArr))
  //바뀐 내용을 다시 저장하기
  location.href="./index.html"
  //원래 페이지로 이동한다
})
