{
  let arr = [1,3,2,5]
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    arrCopy.sort() //순서대로 정렬, 배열을 뒤집는다
    console.log(arrCopy);
  })
}

{
  let arr = [1,3,2,5,11,21]
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    arrCopy.sort((a,b)=> b - a)
    console.log(arrCopy);
  }) //글자 기준으로 나옴, 배열이 꼬임
}

{
  let arr = ['b','c','a','D']
  document.querySelector(`.ex3 button`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    //arrCopy.sort()
    arrCopy.sort((a,b)=>{
      a = a.toLocaleLowerCase()
      b = b.toLocaleLowerCase() //소문자로 바꿔서 정렬
      if(a < b) return -1
      if(a > b) return 1
      if(a === b) return 0 //영어 정렬할 때 조건식 3개이다
    })
    console.log(arrCopy);
  }) 
} 
//그냥 sort()하면 알파벳 대문자 D가 먼저 나온다
//문자와 숫자 중에는 숫자가 먼저 나온다

{
  let arr = [
    {이름 : '이', 나이 : 24},
    {이름 : '박', 나이 : 30},
    {이름 : '김', 나이 : 11},
  ]


  let fn = (arrParam) => {
    document.querySelector(`.ex4 .output`).innerHTML = ''
    arrParam.forEach(v=>{
      let br = document.createElement(`br`)
      document.querySelector(`.ex4 .output`).append(`${v.이름},${v.나이}`,br)
    })
  }
  document.querySelector(`.ex4 .btn1`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    arrCopy.sort((a,b)=>{
      if (a.이름 > b.이름)  return 1
      if (a.이름 < b.이름)  return -1
      if (a.이름 === b.이름) return 0
    })
    //console.log(arrCopy);
    fn(arrCopy)
  })

  document.querySelector(`.ex4 .btn2`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    arrCopy.sort((a,b)=>a.나이 - b.나이)
    fn(arrCopy)
  })
}

{
  let arr = []
  /* 
  {아이디 : 123456,일정명 : 식사, 날짜 : 2023-12-11, 시간  : 06:13}, 
  {아이디 : 223456,일정명 : 영화, 날짜 : 2023-12-15, 시간  : 08:12}, 
  {아이디 : 323451,일정명 : 공부, 날짜 : 2023-12-25, 시간  : 07:30}, 
  */

  document.querySelector(`.ex5 .btnAdd`).addEventListener(`click`,e=>{
    let id = Date.now()  //time Stamp
    let name = document.querySelector(`.ex5 input[type=text]`).value
    let date = document.querySelector(`.ex5 input[type=date]`).value
    let time = document.querySelector(`.ex5 input[type=time]`).value
    let text = document.querySelector(`.ex5 .t`).value
    let obj = {id, name, date, time, text}
    arr.push(obj)

  }) //일정추가

  let fn = (arrParam) =>{
    let output = document.querySelector(`.ex5 .output`)
    output.innerHTML = ''
    arrParam.forEach(v=>{
      let li = document.createElement(`li`)
      li.innerHTML = 
      `
        일정명 : ${v.name} <br>
        날짜 : ${v.date} <br>
        시간 : ${v.time} <br>
        <button value=${v.id}>삭제</button>
      `
    
      li.querySelector(`button`).addEventListener(`click`,e=>{
        let liID= e.target.value
        e.target.parentElement.remove()
       
        arr = arr.filter(v=>{
          return v.id !== parseInt(liID)
        })  
      }) 
      
      output.append(li) 

    })
  } //함수 사용함 arrParam이 arrCopy이다


  document.querySelector(`.ex5 .btnName`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    arrCopy.sort((a,b)=>{
      if(a.name > b.name) return 1
      if(a.name < b.name) return -1
      if(a.name === b.name) return 0
    }) // 정렬
    fn(arrCopy)
    /* let output = document.querySelector(`.ex5 .output`)
    output.innerHTML = '' //다시 출력할 때 비운다
    arrCopy.forEach(v=>{
      let li = document.createElement(`li`)
      li.innerHTML = 
      `
        일정명 : ${v.name} <br>
        날짜 : ${v.date} <br>
        시간 : ${v.time} <br>
        <button value=${v.id}>삭제</button>
      `
      //버튼을 만들고 이벤트를 줄 수 있다
      li.querySelector(`button`).addEventListener(`click`,e=>{
        let liID= e.target.value
        e.target.parentElement.remove() //화면에서만 지워짐
        //원본 배열을 해당 내용을 빼야 한다
        arr = arr.filter(v=>{
          return v.id !== parseInt(liID)
        }) // v.id는 숫자로 나옴 
        //filter 배열을 재배치한다
        //id는 겹치지 않기 때문에 id를 찾아서 삭제해야 한다 
      }) // li 안에 각 button 찾아서 이벤트를 준다 forEach 안에서
      
      output.append(li) //ul안에 li를 넣겠다

    }) //forEach */


  }) //일정명순 출력

  document.querySelector(`.ex5 .btnDate`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    arrCopy.sort((a,b)=>{
      let aTime = a.date+a.time
      let bTime = b.date+b.time
      if(aTime > bTime) return 1
      if(aTime < bTime) return -1
      if(aTime === bTime) return 0
    }) 
    fn(arrCopy)

  }) //시간순출력
  //시간순은 date와 time을 이어붙여야 한다 

  document.querySelector(`.ex5 .btnText`).addEventListener(`click`,e=>{
    let arrCopy = [...arr]
    arrCopy.sort((a,b)=>{
      if(a.text > b.text) return 1
      if(a.text < b.text) return -1
      if(a.text === b.text) return 0
    })
    //정렬만 함 alert 나오게 하기...

  })
  //시간나면 하기 상세내용 alert창이 따로 나온다 버튼 추가해서
  
} 
//겹치지 않는 값을 주기 위해 id를 줘야 한다