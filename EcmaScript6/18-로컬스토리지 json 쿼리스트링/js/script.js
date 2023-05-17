document.querySelector(`form`).addEventListener('submit',e=>{
  e.preventDefault()
}) //새로고침 되면 안 된다 (주소가 바뀌면 안 된다)

document.querySelector(`form`).addEventListener('input',e=>{
  e.currentTarget.checkValidity()
  //폼이 유효한지
  document.querySelector(`.btn-add`).disabled = !e.currentTarget.checkValidity()
  //false일 때 버튼이 살아난다.
}) //form안에 있는 뭐라도 바뀌면

//let arr = [] //초기화는 한번만 하고 배열을 계속 저장하려고
//새로고침하면 사라지는 문제

if(!localStorage.getItem(`arr`)){
  let arr = []
  localStorage.setItem(`arr`, JSON.stringify(arr)) //가져올 때 사용
}

let arr = JSON.parse(localStorage.getItem('arr'))
//저장할 때

//출력
let fnPrintList = () => {
  document.querySelector(`.output`).innerHTML = ``
  arr.forEach(v=>{
    let {아이디, 번호, 이름} = v //객체 안의 키이름을 변수로 바꾸는 것
    let li = document.createElement(`li`)
    li.innerHTML = `
      ${번호}번 ${이름} 
      <button>삭제</button> 
    `
    document.querySelector(`.output`).append(li)
    li.querySelector(`button`).addEventListener(`click`,e=>{
      e.target.parentElement.remove() //화면에서 숨김
      arr = arr.filter(v=> 아이디 !== v.아이디) //배열 수정 목적
      arr = arr.map((v,i)=>{
        v.번호 = i
        return v
      })
      localStorage.setItem('arr',JSON.stringify(arr))
    }) //아이디를 찾을 수 있다
    
    
  })
} //함수 fnPrintList

fnPrintList() //명단출력

document.querySelector(`.btn-add`).addEventListener(`click`,e=>{
  let 이름 = document.querySelector(`.user-name`).value
  let 아이디 = Date.now()
  let obj = {아이디, 이름} //obj = {이름:이름, 아이디:아이디}
  arr.push(obj)
  arr.map((v, i)=>{
    v.번호 = i
    return v
  }) 
  localStorage.setItem('arr', JSON.stringify(arr))
  //배열의 길이와 동일한 새 배열을 만드는 것이 map이다
  //새 배열에 번호를 넣으려고 만드는 것이다

  //출력
  fnPrintList() //명단출력
})