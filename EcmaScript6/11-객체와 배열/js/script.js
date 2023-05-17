{
  let 명단배열 = [] //배열을 계속 추가해야 하기 때문에 밖에서 선언
  
  document.querySelector(`.ex1 .add`).addEventListener  (`click`,e=>{
    let 이름 = document.querySelector(`.ex1 .name`).value
    let 나이 = document.querySelector(`.ex1 .age`).value
    let 성별 = document.querySelector(`.ex1 .gender:checked`).value
    let 사람객체 = {
      이름, //'이름' : 이름 ,'이름'과 이름은 다른 거다.
      나이, //나이 : 나이, 키이름(값)과 변수가 같으면 하나만 써도 가능하다
      성별 //성별 : 성별
    }
    명단배열.push(사람객체)
    
  })

  document.querySelector(`.ex1 .print`).addEventListener(`click`,e=>{
    document.querySelector(`.ex1 .output`).innerHTML = (`인원수 ${명단배열.length}명 <br>`)
    for(let i = 0; i < 명단배열.length; i++){ //배열의 길이만큼 반복한다
      document.querySelector(`.ex1 .output`).append(
        `
        이름 : ${명단배열[i].이름}, 
        나이 : ${명단배열[i].나이}, 
        성별 : ${명단배열[i].성별} 
        `,
        document.createElement(`br`)
        ) 
    }
    
  }) //인원수만 arr.length로 하고 배열 추가된 것은 반복해서
}
/* 
클릭할 때마다 배열이 들어가야 한다
[] 배열
{} 객체 ->하나의 값에 여러개를 넣을 수 있다

arr[1][0] ->가독성이 떨어진다, 숫자만 쓰면 뭘 가르키는지 모르기 때문에
arr[1].이름 -> 키이름을 알고 있으니 편하다

배열[값을 구하고 싶은 해당객체index].객체안의 키이름

배열은 값을 계속 누적시키려고
객체는 그안에서 정보를 효율적으로 찾기 위해서 사용.

배열 안에 객체를 집어 넣어서 사용한다
가독성이 좋고 문법 작성이 편해서 사용한다

배열 안에 객체가 있을 때 호출방법
배열[원하는 객체 값의 배열 index].객체안의 키이름
arr[1].이름 

배열의 index는 0부터 시작한다(첫번째가 0)
 */

{
  let obj = {
    name : 'michle', //문자는 ''따옴표 없으면 변수를 찾기 때문에 ''따옴표 해줘야 한다
    age : 22,
    gender : 'mail', 
    1:'one',
    'a 3': 2
  }
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    obj['name'] = 'jane' //obj.name = 'jane' []대괄호는 문자열로 찾을 때 사용함

    console.log(obj['a 3']);
  })
}
/* 
[]대괄호는 문자열로 찾을 때 사용함
호출할 때는 변수 형태로 찾을 수 없는 객체의 키값을 찾을 때 사용된다 
객체 안에 키이름을 []대괄호로 쓰면 밖에 변수 값을 가져올 수 있다


객체의 키를 선언할 때 []대괄호는 변수명을 의미한다
객체의 키를 호출할 때 []대괄호는 변수형태로 찾을 수 없는 문자값을 호출시 사용 obj['1']
*/

{
  let 성별 = 'gender'
  let 객체 = {
    이름 : '홍길동', // 이름 : 홍길동 (홍길동 변수가 선언되지 않았으므로 에러)
    [`나이`] : 23, // [나이] : 23, 나이라는 변수를 찾기 때문에 에러
    [성별] : '남자', //'gender' : '남자' 와 동일한 선언방식 ->console.log(객체.gender)
    'birth-day' : '2023-2-1' 
  } 
  console.log(객체['birth-day']);
  /* 
  키이름에는 ``사용 불가 쓰고 싶으면 [`이름`] 대괄호를 사용해야 한다
  [이름]을 쓰면 변수를 찾는다
  */

}

{
  let 투두배열 = []
  document.querySelector(`.ex3 .add`).addEventListener(`click`,e=>{
    let date = document.querySelector(`.ex3 input[type=date]`).value
    let time = document.querySelector(`.ex3 input[type=time]`).value
    let text = document.querySelector(`.ex3 input[type=text]`).value
    let 할일객체 = {
      date,
      time,
      text
    }
    투두배열.push(할일객체)
    
    document.querySelector(`.ex3 .output`).append(
      `
        날짜 : ${할일객체.date}, 
        시간 : ${할일객체.time}, 
        일정명 : ${할일객체.text} 
        일정이 추가되었습니다
      `,
      document.createElement(`br`)
    )

    /* document.querySelector(`.ex3 .output`).innerHTML = `
    날짜 : ${date}, <br>
    시간 : ${time}, <br>
    일정명 : ${text} <br>
    (일정이 추가되었습니다)
    `  */
  })

  document.querySelector(`.ex3 .print`).addEventListener(`click`,e=>{
    document.querySelector(`.ex3 .output`).innerHTML = ''
    
    for(let i = 0; i < 투두배열.length; i++){
      document.querySelector(`.ex3 .output`).append(
      
        `일정명 : ${투두배열[i].text},`,
        document.createElement(`br`)
        
      )
    }
    
  })

  document.querySelector(`.ex3 .del`).addEventListener(`click`,e=>{
    document.querySelector(`.ex3 .output`).innerHTML = ''
  })


} //ex3

{
  let arr = []
  document.querySelector(`.ex4 .add`).addEventListener(`click`,e=>{
    let date = document.querySelector(`.ex4 input[type=date]`).value
    let time = document.querySelector(`.ex4 input[type=time]`).value
    let title = document.querySelector(`.ex4 input[type=text]`).value
    let obj = {date,time,title}   

    arr.push(obj)

    document.querySelector(`.ex4 .output`).innerHTML = `
      일정이 추가되었습니다 <br>
      날짜 : ${obj.date} <br>
      시간 : ${obj.time} <br>
      일정명 : ${obj.title} <br>
    `
  })

  document.querySelector(`.ex4 .print`).addEventListener(`click`,e=>{
    document.querySelector(`.ex4 .output`).innerHTML = ''
    for(let i = 0; i < arr.length; i++){
      /* let br = document.createElement(`br`) //for구문 안쪽에서 만들어야 한다 */
      let hr = document.createElement(`hr`)
      document.querySelector(`.ex4 .output`).append(
        `날짜 : ${arr[i].date}`, document.createElement(`br`) ,
        `시간 : ${arr[i].time}`, document.createElement(`br`) ,
        `일정명 : ${arr[i].title}`, document.createElement(`br`),
        hr
      
      ) //br 만들면 한번밖에 사용 못함, 그래서 지금은 저렇게 사용할 수 밖에 없다
    }
  })


} //ex4

{
  let obj = {
    1:'one',
    2:'two',
    3:'three'
  }
  document.querySelector(`.ex5 button`).addEventListener(`click`,e=>{
    let objToArr = Object.entries(obj)
    for(let i = 0; i < objToArr.length; i++){
      let br = document.createElement(`br`)
      document.querySelector(`.ex5 .output`).append(
        `${objToArr[i][0]} : ${objToArr[i][1]}`, br
      )
    }
  })
}