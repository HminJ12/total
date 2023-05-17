{
  let arr = ['가','나','다']
  /* console.log(arr.length); */

  document.querySelector(`.ex1 .push`).addEventListener(`click`,e=>{
    arr.push('라')
    document.querySelector(`.ex1 .output`).innerHTML = arr
  }) //배열은 대괄호 이용 []
  document.querySelector(`.ex1 .unshift`).addEventListener(`click`,e=>{
    arr.unshift('A')
    document.querySelector(`.ex1 .output`).innerHTML = arr
  })
  document.querySelector(`.ex1 .pop`).addEventListener(`click`,e=>{
    arr.pop()
    document.querySelector(`.ex1 .output`).innerHTML = arr
  }) 
  document.querySelector(`.ex1 .shift`).addEventListener(`click`,e=>{
    arr.shift()
    document.querySelector(`.ex1 .output`).innerHTML = arr
  }) 

} 

{
  let arr = [0,1,2,3]
  document.querySelector(`.ex2 .splice`).addEventListener(`click`,e=>{
    arr.splice(1,2,'가') 
    //(1,2) 1로부터 몇개냐 1번부터 2개 지운다
    //(1,0,'가') 1번째 위치부터 하나도 안 지우고 가를 넣겠다
    document.querySelector(`.ex2 .output`).innerHTML = arr
  }) //인자가 2개면 제거, 인자가 3개 이상이면 추가, 계속 추가 가능
}

{
  let str = '안녕 님'
  document.querySelector(`.ex3 .split`).addEventListener(`click`,e=>{
    let arr = str.split(' ') //[안녕,님]  
    let name = document.querySelector(`.ex3 input`).value
    arr.splice(1,0,name)
    str = arr.join('')
    document.querySelector(`.ex3 .output`).innerHTML = str
  }) 
} //ex3

{
  let arr = ['홍길동','무명씨','아무개']
  let n = 0
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    if(arr.length === 0){
      alert('더 이상 출력할 목록이 없습니다')
      return false
    }
    n ++
    let rand = Math.floor(Math.random() * arr.length)
    let br = document.createElement(`br`)
    document.querySelector(`.ex4 .output`).append(`${n}등은 ${arr[rand]}`, br)
    arr.splice(rand,1)
  }) 

} //ex4

{
  let str = ['홍길동','무명씨','아무개']

  document.querySelector(`.ex5 button`).addEventListener(`click`,e=>{
   
    
   
  
    let leng = str.length
    for(let i = 1; i <= leng; i++){
      let rand = Math.floor(Math.random() * str.length)
      document.querySelector(`.ex5 .output`).append(
        `${i}등은`,
        str[rand],
        document.createElement(`br`)
      )
      str.splice(rand,1)
    }
    
  }) 

}
//반복문 필요