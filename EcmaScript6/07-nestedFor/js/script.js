{
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    let sum = 5
    for(let i = 1; i <= 5; i++){
      sum = sum + 1
    }
    document.querySelector(`.ex1 .output`).innerText = sum
  })
}

{
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let pow = 1
    document.querySelector(`.ex2 .output`).innerHTML=''
    for(let i = 1; i <= 5; i++){
      pow = pow * 2
      let split = (i < 5)? ',':''
      document.querySelector(`.ex2 .output`).append(pow+split)
    } //목적에 따라 위치가 다르다
    
  })
}

//중첩 for구문
{
  document.querySelector(`.ex3 button`).addEventListener(`click`,e=>{
    
    for(let i = 1; i <= 4; i++){
      for(let j = 1; j <= 4; j++){
        document.querySelector(`.ex3 .output`).append(`*`)
      } //for j end
      document.querySelector(`.ex3 .output`).append(document.createElement('br'))
    } //for i end
  }) 
}

//구구단
{
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    for(let i = 2; i <= 9; i++){
      for(let j = 1; j <= 9; j++){
        
        document.querySelector(`.ex4 .output`).append(`${i} x ${j}`)
        document.querySelector(`.ex4 .output`).append(document.createElement('br'))
      }
      document.querySelector(`.ex4 .output`).append(document.createElement('hr'))
    }
  })
}

{
  document.querySelector(`.ex5 button`).addEventListener(`click`,e=>{
    for(let i = 1; i <= 5; i++){
      for(let j = 1; j <= i; j++){
        
        document.querySelector(`.ex5 .output`).append(`🖤`)
      }
      document.querySelector(`.ex5 .output`).append(document.createElement('br'))
    }
  })

} //j가 i만큼 증가한다 

{
  document.querySelector(`.ex6 button`).addEventListener(`click`,e=>{
    for(let i = 1; i <= 5; i++){
      for(let j = 1; j <= (5-i); j++){
        document.querySelector(`.ex6 .output`).append(`😊`)
      }
      for(let j = 1; j <= i; j++){
        document.querySelector(`.ex6 .output`).append(`😂`)
      }
      document.querySelector(`.ex6 .output`).append(document.createElement('br'))
    }
  })
} //for 안에 for 2개의 식이 나와야 한다

{
  document.querySelector(`.ex7 button`).addEventListener(`click`,e=>{
    for(let i = 1; i <= 3; i++){
      for(let j = 1; j <= (3-i); j++){
        document.querySelector(`.ex7 .output`).append(`😊`)
      }
      for(let j = 1; j <= (i*2)-1; j++){
        document.querySelector(`.ex7 .output`).append(`😂`)
      }
      for(let j = 1; j <= (3-i); j++){
        document.querySelector(`.ex7 .output`).append(`😊`)
      }
      document.querySelector(`.ex7 .output`).append(document.createElement(`br`))
    }
  })
}


{
  let table = document.createElement(`table`)
  table.innerHTML=`
  <thead></thead>
  <tbody></tbody>
  `
  document.querySelector(`.ex8`).append(table)

  let thTr = document.createElement(`tr`) //thead안에 들어갈 tr
  for(let i = 1; i <= 10; i++){
    let th = document.createElement(`th`)
    th.innerText = i
    th.classList.add(`green`)
    thTr.append(th)
  }
  document.querySelector(`.ex8 thead`).append(thTr)

  for(let i = 1; i <= 9; i++){
    
 
  let tr = document.createElement(`tr`)
  tr.innerHTML = `
    <td colspan="${i}" class="orange">1</td>
    <td colspan="${10-i}" class="yellow">2</td>
  `
  document.querySelector(`.ex8 tbody`).append(tr)
  } //for
 
}
//tr을 만든다 그안에 th를 만든다 th를 thead에 넣는다
