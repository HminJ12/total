/* 
{
  localStorage.setItem('n',1) // 하드디스크에 저장 let n = 1
  //localStorage.removeItem('n')
  let n = localStorage.getItem('n') 
  console.log(n);
} 
*/

{
  /*localStorage.removeItem('n')
   if(!localStorage.getItem('n')){
    localStorage.setItem('n',0)
  } //!localStorage.getItem('n') ->false 기록된 값이 없으면 n을 0으로 초기화해라

  let n = parseInt(localStorage.getItem('n')) //이전 값을 받아온다

  document.querySelector(`.ex1 .output`).innerText = n

  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    n ++
    localStorage.setItem('n', n)
    document.querySelector(`.ex1 .output`).innerText = n
  }) */
}
//많이 사용함! 사용자 광고 안보기 등등 보안이 중요하지 않는 것들을 주로 사용한다

{
  /* 
    [
      {a : 1},
      {a : 2},
    ]
    누적되려면 빈 배열이 필요하다
  */
    
 /*  if(!localStorage.getItem('arr')){
    let arr = [{a:0}]
    localStorage.setItem('arr', JSON.stringify(arr))
  } //JSON 세계 공용 같이 사용할 수 있는 arr를 JSON으로 바꾸겠다

  let arr = JSON.parse(localStorage.getItem('arr'))
  //JSON을 스크립트로
  let n = arr[arr.length - 1].a //배열의 마지막 번호
  console.log(n);


  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let obj = {a : ++n}
    arr.push(obj)
    localStorage.setItem('arr', JSON.stringify(arr))
    document.querySelector(`.ex2 .output`).innerHTML
    arr.forEach(v=>{
      document.querySelector(`.ex2 .output`).append(`
        a: ${v.a} , 
      `)
    })
  
  }) */
}

{
  //로컬스토리지와 배열 초기화
  if(!localStorage.getItem(`todoArr`)){
    let emptyArr = []
    localStorage.setItem(`todoArr`, JSON.stringify(emptyArr))
  }

  let todoArr = JSON.parse(localStorage.getItem(`todoArr`))
  

  //앱 초기화 시 일정목록 출력
  let outputList = (todoArrParam) => {
    //todoArr배열을 반복 출력 함수 선언
    document.querySelector(`.ex3 .output`).innerHTML = ''
    todoArrParam.forEach(v=>{
      let li = document.createElement(`li`)
      let {id, todoName, date, time} = v //구조분해함 destructuring
      li.innerHTML = 
        `
          ${todoName}<br>
          ${date}<br>
          ${time}<br>
          <button value=${id} class="delete">삭제</button>
          <a href="./detail.html?id=${id}">일정내용보기</button>
        `
        
      document.querySelector(`.ex3 .output`).append(li)
      //delete, detail 버튼 기능 구현
      li.querySelector(`.delete`).addEventListener(`click`,e=>{
        e.target.parentElement.remove() //지우는 거는 원본 arr도 지워야 한다
        todoArr = todoArr.filter(v=>{ 
          return parseInt(e.target.value) !== v.id
        }) //클릭한 버튼의 id와 todoArr의 v번째 id를 비교해서 다른 것만 뽑아서 배열
        localStorage.setItem('todoArr',JSON.stringify(todoArr))
      }) //일정제거 버튼, 지우는 거는 원본을 사용해야 해서 건드리면 안 된다
    }) //forEach
  } //outputList

  outputList(todoArr) //시작할 때 바로 추가
  

  //유효성 검사 하기
  document.querySelector(`.ex3`).addEventListener(`submit`,e=>{
    e.preventDefault()
  })

  document.querySelector(`.ex3`).addEventListener(`input`,e=>{
    document.querySelector(`.ex3 button`).disabled
    = !e.currentTarget.checkValidity() //버튼 죽이기 = !true(false)
    
    /*   
      if(e.currentTarget.checkValidity()){
        document.querySelector(`.ex3 button`).disabled = false
      }else{
        document.querySelector(`.ex3 button`).disabled = true
      }
    */
  })

  //버튼 일정 추가 기능
  document.querySelector(`.ex3 .add`).addEventListener(`click`,e=>{
    let id = Date.now()
    let todoName = document.querySelector(`.ex3 input[type=text]`).value  
    let date = document.querySelector(`.ex3 input[type=date]`).value  
    let time = document.querySelector(`.ex3 input[type=time]`).value  
    let desc = document.querySelector(`.ex3 textarea`).value  
    let obj = {id, todoName, date, time, desc}
    todoArr.push(obj)
    localStorage.setItem('todoArr',JSON.stringify(todoArr))
    outputList(todoArr)
  })

  //정렬 옵션 구현 select는 change이벤트
  document.querySelector(`.ex3 .sort`).addEventListener('change',e=>{
    let todoArrCopy = [...todoArr]
    let sortOption = e.currentTarget.value
    if(sortOption==='recently'){
      todoArrCopy.reverse() //뒤집히는 거
    }else if(sortOption==='name'){
      todoArrCopy.sort((a,b)=>{
        if(a.todoName > b.todoName) return 1
        if(a.todoName < b.todoName) return -1
        if(a.todoName === b.todoName) return 0
      })
    }else if(sortOption==='date'){
      todoArrCopy.sort((a,b)=>{
        let time1 = a.date+'-'+a.time
        let time2 = b.date+'-'+b.time
        if(time1 > time2) return 1
        if(time1 < time2) return -1
        if(time1 === time2) return 0
      })  
    }
    outputList(todoArrCopy)
  })
  //e.currentTarget.value 값마다 정렬이 달라진다


} //ex3 ''안에 있는 todoArr는 하드디스크에 저장하는 거 일정추가 click 
