{
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex1 .output`).innerHTML=''
    //비워 놓는다.
    for(let i = 1; i <= 10; i++){
      document.querySelector(`.ex1 .output`).append(i)
      var br = document.createElement(`br`)
      document.querySelector(`.ex1 .output`).append(br)
    }
  })
}

{
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex2 .output`).innerHTML=''
    let sum = 0
    for(let i = 1; i <=10; i++){
      sum += i
    }
    document.querySelector(`.ex2 .output`).innerText=sum
  })
}

{
  document.querySelector(`.ex3 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex3 .output`).innerHTML=''
    let sum = 0
    for(let i = 5; i <=10; i++){
      ++sum
    }
    document.querySelector(`.ex3 .output`).innerText=sum
  })
}

{
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex4 .output`).innerHTML=''
    let sum = 0
    let num1 = parseInt(document.querySelector(`.ex4 .num1`).value)
    let num2 = parseInt(document.querySelector(`.ex4 .num2`).value)
    
    let start
    let end
    if(num2 >= num1){
      start = num1
      end = num2
    }else{
      start = num2
      end = num1
    }
    //작은 값을 앞에 넣고 큰값은 뒤에 넣는다

    for (let i = start; i <= end; i++){
      sum += i
    }
    //이렇게 푸는 방법도 있다

  /*     
    if(num2 >= num1){
      for(let i = num1; i <= num2; i++){
        sum += i
      }
    }else{
      for(let i = num1; i >= num2; i--){
        sum += i
      }
    }
  */
    
    document.querySelector(`.ex4 .output`).innerText = sum
  })


} //1에서 10, 10에서 1 반복문 사용 num1 > num2 조건문 안에서 for구문 사용

{
  document.querySelector(`.ex5 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex5 .output`).innerHTML=''
    let cnt = 0
    let num1 = parseInt(document.querySelector(`.ex5 .num1`).value)
    let num2 = parseInt(document.querySelector(`.ex5 .num2`).value)

    let start = num1
    let end = num2

    if(num1 > num2){
      start = num2
      end = num1 //수를 뒤집은 거
    }

    for (let i = start; i <= end; i++){
      if((i % 2 === 0)){
        ++cnt
      }
    }

    document.querySelector(`.ex5 .output`).innerText = cnt
  })
}
//짝수이면 한개씩 증가 2로 나눈 나머지가 0일 경우 
//for 안에 if문

{
  document.querySelector(`.ex6 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex6 ul`).innerHTML=''
    //$(`.ex6 ul`).html(''), $(`.ex6 ul`).empty(), $(`.ex6 ul li`).remove()
    
    for(let i = 1; i <=10; i++){
      
      let li = document.createElement('li') //li 객체를 하나 만든다 li 태그를 만드는 것
      li.innerHTML=`
        <p>li 1번입니다</p>
      `
      document.querySelector(`.ex6 ul`).append(li)
  
    } //for구문으로 반복해서 10번을 만든다
    
  })
}

{
  document.querySelector(`.ex7 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex7 .output`).innerHTML = ''
    for(let i = 1; i <= 5; i++){
      let img = document.createElement('img')
      img.setAttribute('src',`./img/img${i}.jpg`) //attr('src','./img/img1.jpg')
      //getAttribute('src') src 속성값을 가져오겠다,  attr('src')
      document.querySelector(`.ex7 .output`).append(img)
    }
  })
}

{
  document.querySelector(`.ex8 button`).addEventListener(`click`,e=>{
    document.querySelector(`.ex8 .output`).innerHTML=''
    let num1 = parseInt(document.querySelector(`.ex8 .num1`).value)
    let num2 = parseInt(document.querySelector(`.ex8 .num2`).value)
    let result = 1


    for(let i = 1; i <= num2; i++){
      result = result * num1
      document.querySelector(`.ex8 .output`).append(`${result},`)
    }
    

  })
}
//2의 3승은 2,4,8