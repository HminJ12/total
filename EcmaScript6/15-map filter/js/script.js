{
  let arr = []
  for(let i = 1; i <= 100; i++){
    arr.push(i)
  }
  
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    let arr2x = arr.map(v=>v*2)
    /*
    let arr2x = arr.map(v=>{
      return v*2
    }) 
      */
    
  })

} //ex1

{
  let arr = []
  for(let i = 1; i <= 100; i++){
    arr.push(i)
  }
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let arrEven = arr.filter(v=>v%2 === 0)
    
    /* 
    let arrEven = arr.filter(v=>{
      return v%2 === 0
    }) 
    //filter는 무조건 조건식이 나온다 */
    
  })
} //ex2

{
  let arr = ['월','화','수','목','금','토','일']
  let arrCopy = [...arr] //배열 복사
  for(let i = 1; i <= 3; i++){
    let r = Math.floor(Math.random() * arrCopy.length)
    let combine = (i<3)? ',':''
    document.querySelector(`.ex3 .day`).append(
      `${arrCopy[r]}${combine}`
    )
    arrCopy.splice(r,1)
  }


  document.querySelector(`.ex3 button`).addEventListener(`click`,e=>{
    //일,토,금 -> [6,5,4]
    let dayIdxArr = document.querySelector(`.ex3 .day`).innerText.split(',').map(v=>{
      return arr.indexOf(v)
    })
    dayIdxArr.forEach(v=>{
      document.querySelector(`.ex3 .output`).append(`${v},`)
    })
  })
} //ex4

{
  let arr = []
  for(let i = 1; i <= 100; i++){
    arr.push(i)
  }
  let sum = 0 //초기값이 필요하다
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    let arrSum = arr.map(v=>sum+=v)
    document.querySelector(`.ex4 .output`).innerHTML = arrSum
  })
}