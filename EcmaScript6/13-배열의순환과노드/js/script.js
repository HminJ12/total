{
  let arr = ['가','나','다','라']
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    alert(arr.indexOf('aa'))
  })
} //ex1

{
  let arr = [1,2,3,4,5]
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let idx = arr.findIndex(v => v%2===0)
    alert(idx)
  })
} //ex2

{
  let arr = [
    {이름:'홍', 나이:'2',성별:'여'},
    {이름:'김', 나이:'3',성별:'남'},
    {이름:'이', 나이:'4',성별:'여'},
    {이름:'박', 나이:'3',성별:'여'},
  ]
  document.querySelector(`.ex3 button`).addEventListener(`click`,e=>{
    Object.entries(arr.find(v => v.나이==='3')).forEach((v)=>{
      let br = document.createElement(`br`)
      document.querySelector(`.ex3 .output`).append(
        `${v[0]} : ${v[1]}` , br
      )
   })
   //배열에서 나이가 3살인 객체를 찾아서 배열로 바꾸어서 차례대로 한번씩
   //find 값 전체를 return하는 것

  }) //v가 객체, 객체가 나온다
} //ex3 배열은 따로 정리하기!!

{
  document.querySelector(`.ex4 button:nth-child(1)`).addEventListener(`click`,e=>{
    e.target.parentElement.style.backgroundColor = 'red'
  })
  document.querySelector(`.ex4 button:nth-child(2)`).addEventListener(`click`,e=>{
    e.target.nextElementSibling.style.backgroundColor = 'red'
  })
  document.querySelector(`.ex4 button:nth-child(3)`).addEventListener(`click`,e=>{
    e.target.previousElementSibling.style.backgroundColor = 'red'
  })

  //$(`.ex4 button:nth-child(4)`).siblings('*')
  document.querySelector(`.ex4 button:nth-child(4)`).addEventListener(`click`,e=>{
    Array.from(e.target.parentElement.children).forEach(v=>{
      if(e.target === v) return false
      v.style.backgroundColor = 'red'
    })
  })

  //e.target -> this, 클릭한 버튼
  //1개를 return한다!
  //e.target.parentElement.children -> 유사 배열이다 children할 때 나온다 
  //$(this).siblings(`button`)
  //HTML Collection 유사 배열  실제 배열은 아니다 forEach 사용불가
  //Array.from(e.target.parentElement.children) ->Array.from()을 사용해서 실제 배열로 바꾼다
  //실제 배열로 바꾼 후, forEach사용해준다
  /* 
  e.target.parentElement.children -> 버튼 4개
  v는 해당 버튼 차례
  e는 버튼 눌른 애
  */
} //ex4 형제찾기

{
  document.querySelectorAll(`.ex5 button`).forEach((v)=>{
    v.addEventListener(`click`,e=>{
      Array.from(e.target.parentElement.children).forEach((v)=>{
        v.style.backgroundColor = '#FFF'
      }) //전부 다 하얗게
      Array.from(e.target.parentElement.children).forEach((v)=>{
        if(v === e.target) return false
        v.style.backgroundColor = 'red'
      }) //클릭한 버튼 부모의 자식들을 빨갛게, 클릭한 버튼 빼고
    }) //event binding
  }) //forEach
} //ex5
/* 
document.querySelectorAll(`.ex5 button`) -> 배열
querySelectorAll로 찾으면 
NodeList가 나온다 -> 유사배열 forEach 사용가능, indexOf는 사용불가
*/

{
  document.querySelectorAll(`.ex6 button`).forEach((v)=>{
    v.addEventListener(`click`,e=>{
      //$(`.ex6 button`).not($(this)).removeClass(`active`)
      document.querySelectorAll(`.ex6 button`).forEach(v=>{
        if(v === e.target) return false
        //클릭한 애 뺀다
        v.classList.remove('active')
      }) //4개 버튼 찾아서 remove 하려고 
      
      //$(this).toggleClass(`active`)
      e.target.classList.toggle('active')
    })
  }) //click하려고
} //ex6 

/* 
classList.add('active'),
classList.remove('active'),
classList.toggle('active')
*/

{
  document.querySelector(`.ex7 button`).addEventListener(`click`,e=>{
    /* 
    Array.from(e.target.parentElement.children).forEach(v=>{
      if(e.target === v) return false
      v.style.background = v.innerText
    }) 
    */

    e.target.parentElement.querySelectorAll(`.box`).forEach(v=>{
      v.style.background = v.innerText
    }) //부모안에서만 .box를 찾는다

    /* 
    document.querySelectorAll(`.ex7 .box`).forEach(v=>{
      let bg = v.innerHTML
      v.style.backgroundColor = bg
    }) 
    */
  })
} //클릭하면 각자 색이 변한다

{
  document.querySelectorAll(`.ex8 button`).forEach(v=>{
    v.addEventListener(`click`,e=>{
      document.querySelectorAll(`.ex8 .box`).forEach(v=>{
        v.style.background = 'none'
      }) //박스 9개 불을 다 끈다
      e.target.parentElement.querySelectorAll(`.box`).forEach(v=>{
        v.style.background = v.innerText
      }) //클릭한 버튼 옆에 있는 박스 3개는 색을 바꾼다
    })
  })
} //ex8

{
  //prevAll() , nextAll()
  document.querySelector(`.ex9 button:nth-child(3)`).addEventListener(`click`,e=>{
    let idx = Array.from(document.querySelectorAll(`.ex9 button`)).indexOf(e.target)
    //클릭한 버튼이 얘네들 중에서 몇 번째 들어있냐
    
    Array.from(e.target.parentElement.children).forEach((v,i)=>{
      if(i < idx) v.style.color = `red`
    })
  })
} //(v,i) i는 돌아가는 숫자
/* 
클릭한 버튼의 인덱스는 2 
indexOf 사용하려고 Arry.from()
prevAll
*/

{
  document.querySelectorAll(`.ex10 button`).forEach((v)=>{

    v.addEventListener(`click`,e=>{
      let idx = Array.from(document.querySelectorAll(`.ex10 button`)).indexOf(e.target)
      Array.from(e.target.parentElement.children).forEach((v,i)=>{
        v.style.color = `black`
      })
      Array.from(e.target.parentElement.children).forEach((v,i)=>{
        if(i > idx) v.style.color = `red`
      })
    })
  })
} //nextAll
/* 
Array.from(document.querySelectorAll(`.ex10 button`))랑
Array.from(e.target.parentElement.children) 같은 말이다
*/

/* {
  let enArr = ['sun','mon','tue','wed','thr','fri','sat']
  let koArr = ['일','월','화','수','목','금','토']
 
  for(let i = 1; i <= 3; i++){
    let random = Math.floor(Math.random() * enArr.length)
    document.querySelector(`.ex11 .en`).append(
      enArr[random] , ',')

      
    
  }

  
} //ex11
//3회 반복 시작하자마자 나온다, 같은 문장 가능하게, 배열 저장
//append를 이용해 나오게 한다
//배열 순서 저장해야 한다 
//사용자가 입력한 문자열을 배열로 저장 split(',')
//userArr를 3회 반복하여 각배열값이 koArr의 몇번째에 들어 있는지 확인해서 
//배열길이만큼 반복해서 몇 번째 들어있는지..
//randArr의 번호와 일치하는지 비교하며 1씩 증감연산
//userArr.foEach((v,i)=>{}) 
내가 풀다 만 거*/

{
  let enArr = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat']
  let korArr = ['일', '월', '화', '수', '목', '금', '토']
  let copyEnArr = [...enArr]

  let newEnArr = []
  let newLastEnArr = []
  let newKorArr = []
  let copylength = copyEnArr.length
  for (let i = 1; i <= 3; i++) {
    let enIdx = Math.floor(Math.random() * copylength)
    newEnArr.push(copyEnArr[enIdx])
    copyEnArr.splice(enIdx, 1)
    copylength--
  }
  newEnArr.forEach(v => {
    let nIdx = enArr.indexOf(v)
    newLastEnArr.push(nIdx)
  })
  newLastEnArr.sort()
  document.querySelector(`.ex11 .en`).innerHTML = newEnArr

  document.querySelector(`.ex11 button`).addEventListener(`click`, e => {
    newKorArr = []
    let count = 0
    let userInput = document.querySelector(`.ex11 input`).value
    userInput = userInput.replaceAll(` `, ``)
    let userArr = userInput.split(',')
    userArr.forEach(v => {
      let kIdx = korArr.indexOf(v)
      newKorArr.push(kIdx)
    })
    newKorArr.sort()
    console.log(newLastEnArr, newKorArr);
    newKorArr.forEach((v) => {
      if (newLastEnArr.indexOf(v) >= 0) { count++ }
    })
    document.querySelector(`.ex11 .output`).innerHTML = count
  })
}//ex11


{
  let enArr = ['sun','mon','tue','wed','thr','fri','sat']
  let koArr = ['일','월','화','수','목','금','토']
  let enArrCopy = ['sun','mon','tue','wed','thr','fri','sat']
  let enArrIdx = []
  
  for(let i = 1; i <= 3; i++){
    let random = Math.floor(Math.random() * enArrCopy.length)
    document.querySelector(`.ex12 .en`).append(enArrCopy[random], ',')
    enArrIdx.push(enArr.indexOf(enArrCopy[random])) //0,1,2
    enArrCopy.splice(random,1) //겹치지 않게 하는 거
    
  }
  //copy본은 값이 계속 바뀐다

  

  document.querySelector(`.ex12 button`).addEventListener(`click`,()=>{
    let inputArrIdx = []
    let inputArr = document.querySelector(`.ex12 input`).value.split(`,`)
    //koArr(inputArr[0])
    //inputArrIdx.push()
    for(let i = 0; i <= 2; i++){
      inputArrIdx.push(koArr.indexOf(inputArr[i]))
    }
    
    let point = 0
    for(let i = 0; i <= 2; i++){
      if(inputArrIdx[i] === enArrIdx[i]) point ++
    }
    let result = (point === 3)? '정답' : '오답'
    document.querySelector(`.ex12 .output`).innerText = result


  
  }) //click

}
