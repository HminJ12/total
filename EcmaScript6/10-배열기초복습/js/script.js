{
  let click = false
  let arr = []
  document.querySelector(`.ex1 .print`).addEventListener(`click`, e => {

    if (!click) {
      let str = document.querySelector(`.ex1 input`).value
      arr = str.split(',')
      click = !click //click = true
    } //처음 클릭인지 알아보려고

    let rand = Math.floor(Math.random() * arr.length)

    document.querySelector(`.ex1 .output`).append(
      arr[rand].trim(),
      document.createElement(`br`)
    )
    arr.splice(rand, 1)
    if (arr.length === 0) {
      //e.target.setAttribute('disabled',true)
      e.target.disabled = true //제이쿼리에서 $(`button`).prop(`disabled`,true)
      //비활성화를 하겠다
    }

  }) //click

  document.querySelector(`.ex1 .reset`).addEventListener(`click`, e => {
    document.querySelector(`.ex1 .print`).disabled = false
    document.querySelector(`.ex1 .output`).innerHTML = ''
    //$(`.ex`).html(''),$(`.ex`).empty(), $(`.ex *`).remove()
    document.querySelector(`.ex1 input`).value = ''
    //$(`input`).val('')
    document.querySelector(`.ex1 input`).focus()
    //$(`input`).focus()
    click = false
    arr = []

  })


}//ex1

{
  let arr = [] //배열 초기화
  document.querySelector(`.ex2 form`).addEventListener(`submit`, e => {
    e.preventDefault() //원래 있던 기능 사용하지 못하게, 새로고침을 막는다
    let name = document.querySelector(`.ex2 input`).value.trim()
    //trim() 앞뒤 여백을 다 지우고 가져오겠다
    document.querySelector(`.ex2 .list`).append(
      name,
      document.createElement(`br`)
    )
    document.querySelector(`.ex2 input`).value = ''
    arr.push(name) //배열에 넣어준다

  }) //submit
  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    //배열의 길이만큼 반복
    let leng = arr.length
    for (let i = 1; i <= leng; i++) {
      let rand = Math.floor(Math.random() * arr.length)
      document.querySelector(`.ex2 .output`).append(
        `${(leng + 1) - i}등은`,
        arr[rand],
        document.createElement(`br`)
      )
      arr.splice(rand, 1)
    }
  })

}

{
  let arr = []
  document.querySelector(`.ex3 button`).addEventListener('click', e => {
    document.querySelector(`.ex3 .output`).innerHTML=''
    let num1 = parseInt(document.querySelector(`.ex3 .start`).value)
    let num2 = parseInt(document.querySelector(`.ex3 .end`).value)

  
    let start = num1
    let end = num2
    if (num1 > num2) {
      start = num2
      end = num1
    }
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }
  


    let leng = end-start+1
    for (let i = 1; i <= leng; i++) {
      let rand = Math.floor(Math.random() * arr.length)
      document.querySelector(`.ex3 .output`).append(
        arr[rand],
        document.createElement(`br`)
      )
      arr.splice(rand, 1)
    } 
    //다시 풀어보기
  })
} 

{
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex4 .output`).innerHTML =''
    
    let start = parseInt(document.querySelector(`.ex4 .start`).value)
    let end = parseInt(document.querySelector(`.ex4 .end`).value)

    let arr = []
    for(let i =start; i <= end; i++){
      arr.push(i)
    }   //클릭할 때마다 나오고 싶어서 다시 출력하려고

    for(let i = start; i <= end; i++){
      let ranNum = Math.floor(Math.random() * arr.length) //랜덤번호뽑기
      document.querySelector(`.ex4 .output`).append(arr[ranNum], ',')  //뽑힌 번호의 배열값 출력
      arr.splice(ranNum,1) //뽑힌 번호의 배열값 제거
    } //for

  })
} //ex4
//겹치지 않으려면 배열이 꼭 필요함
//한꺼번에 한다는 건 10번 다 하겠다 for구문

{
  document.querySelector(`.ex5 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex5 .output`).innerHTML =''
    
    let start = parseInt(document.querySelector(`.ex5 .start`).value)
    let end = parseInt(document.querySelector(`.ex5 .end`).value)

    let arr = []
    for(let i =start; i <= end; i++){
      arr.push(i)
    }  //사용한 수만큼 
    
    /* let arrCopy = [...arr] */ //copy본을 하나 만든다 빈배열을, 배열 카피했다
    let arrCopy = [] //순서를 바꿔서 배열을 copy하겠다
    let leng = arr.length //원본 배열의 길이, 반복문에서 사용하려고
    for(let i =1; i <= leng; i++){
      let ranNum = Math.floor(Math.random() * arr.length) 
      //원본 배열의 길이에서 하나의 번호를 랜덤하게 뽑는다
      arrCopy.push(arr[ranNum])
      //뽑힌 번호에 해당하는 원본배열의 값을 카피본에 집어 넣는다
      arr.splice(ranNum,1)
      //원본배열에서 뽑힌 번호를 제거
    } //leng 반복의 숫자가 변하면 안 되기 때문에 변수를 만든다  
      //arr배열을 뽑아서 arrCopy로 옮겼다
      let str = arrCopy.join('/') //문자열로 전환
      document.querySelector(`.ex5 .output`).innerText = str
      //배열을 통째로 값으로 출력을 하면 안 된다
  })
}