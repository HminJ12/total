{
  let arr = ['가','나','다']
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    let idx = arr.indexOf('나') //index는 몇 번째를 말한다. 번호, 숫자
    //arr이라는 값 안에 몇 번째이냐
    //주로 값이 겹치지 않을 때 사용함(대표적으로 ID)
    document.querySelector(`.ex1 .output`).innerText = idx
  }) 
} //ex1

{
  let arr = [
  {'이름':'홍길동','나이':'24'},
  {'이름':'아무개','나이':'22'},
  {'이름':'무명씨','나이':'23'},
  ]
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let idx = arr.findIndex(v => v.이름 === '아무개') 
    //차례대로 한번씩 검사한다, return을 꼭 해야 한다
    //return할 때도 생략 가능하다 ((v)=>{return v.이름 === '아무개'})
    document.querySelector(`.ex2 .output`).innerText = idx
  })
  //index를 return해준다 
  //차이점은 중첩구조인 경우 사용할 수 있다, 복잡한 구조
  //매개변수 v, 
  //빈도수는 findIndex가 더 높다.
} //ex2

{
  let arr = [
    {'이름':'홍길동','나이':'24'},
    {'이름':'아무개','나이':'22'},
    {'이름':'무명씨','나이':'23'},
    ]
    document.querySelector(`.ex3 button`).addEventListener(`click`,e=>{
      let name = document.querySelector(`.ex3 input`).value
      let idx = arr.findIndex(v => {
        return v.이름 === name
      }) 
      /* let result
      if(idx === -1){
        result = '해당하는 사람이 존재하지 않아요'
      }else{
        result = arr[idx].나이
      } */
      let result = (idx >= 0)? arr[idx].나이:'해당하는 사람이 존재하지 않아요'
      
      document.querySelector(`.ex3 .output`).innerText = result
    })


} //없으면 없다고 나오고 있으면 이름과 나이 나오게 하기

{
  let arr = 
  [
    {'이름':'홍길동','나이':'24','성별':'남'},
    {'이름':'아무개','나이':'22','성별':'여'},
    {'이름':'무명씨','나이':'27','성별':'남'},
    {'이름':'영희','나이':'20','성별':'여'},
    {'이름':'순희','나이':'26','성별':'여'},
  ]

  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    let  cnt = 0
    let gender = document.querySelector(`.ex4 input`).value
    arr.forEach((v)=>{
      if(v.성별 === gender) cnt++ 
    })
    document.querySelector(`.ex4 .output`).innerText = cnt
  })
} //남자, 여자 몇명인지 알아내는 거
//엘리먼트 제어할 때 사용, document.querySelectorAll사용할 때 사용

{
  let btnArr = document.querySelectorAll(`.ex5 button`)
  btnArr.forEach((v)=>{
    v.addEventListener(`click`,e=>{
      alert(e.target.innerText)
    })
  })
} //ex5
//forEach, 필터, 맵
//여러 객체를 관리하려고 

{
  let engArr = ['sun','mon','tue','wed','thr','fri','sat']
  let korArr = ['일','월','화','수','목','금','토']
  let n = Math.floor(Math.random() * 7) //몇번째 요일이 문제로 나왔는지 기록
  document.querySelector(`.ex6 .eng`).innerText = engArr[n]
  document.querySelector(`.ex6 button`).addEventListener(`click`,e=>{
    let kor = document.querySelector(`.ex6 .kor`).value
    let idx = korArr.indexOf(kor)
    let result = (n === idx)? '정답':'오답'
    document.querySelector(`.ex6 .output`).innerText = result
  })

}
//indexOf 사용하기 random === indexOf