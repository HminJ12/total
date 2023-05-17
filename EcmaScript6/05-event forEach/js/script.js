{
  document.querySelectorAll(`.ex1 button`).forEach(v=>{
    v.addEventListener(`click`,e=>{
      console.log(e.target.innerText);
    })
  })
}

{
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let sum = 0

    document.querySelectorAll(`.ex2 input`).forEach(v=>{
      sum += parseInt(v.value) // $(this).val()

    })
    document.querySelector(`.ex2 .output`).innerText = sum

  })
}

{
  let inputs = document.querySelectorAll(`.ex3 input`)
  //변수를 넣어서 식을 줄인다

  inputs.forEach(v=>{
    v.addEventListener(`input`,e=>{
      let sum = 0
      inputs.forEach(v=>{
        sum += parseInt(v.value)
      }) //계산하려는 forEach
      document.querySelector(`.ex3 .output`).innerText = sum
      //출력은 한번

    }) //event binding 총 3번 이벤트를 준거다.
  }) //forEach 이벤트하려고
} //입력하자마자 바로바로 바뀌는 이벤트



/* {
  let fnChangeBoxbg = (exNum) => {
      document.querySelectorAll(`.ex${exNum} .box`).forEach(box=>{
       v.style.background=box.innerText
      })
  }
 */
/* 
   document.querySelectorAll(`.ex4 button, .ex5 button`).forEach(button=>{
    button.addEventListener(`click`,e=>{
      fnChangeBoxbg(e.target.value)
    })
  })   */
 /*  document.querySelectorAll(`.ex4 button, .ex5 button`).forEach(button => {
    button.addEventListener(`click`,e=>{
      document.querySelectorAll(`.ex${e.target.value} .box`).forEach(box => {
        box.style.background = box.innerText
      })
    })
  }) */



  //css({:})
  //el.style.background='red'
  /* 
  css({'background-image':`a.jpg`})
  el.style.backgroundImage='a.jpg'
  

} *///ex4, ex5 

/* 
{
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
     document.querySelectorAll(`.ex4 .box`).forEach(box=>{
      v.style.background=box.innerText
     })
  
  })

  
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    fnChangeBoxbg = (4)
  })


}  */


{
  let fnChangeBoxbg = (exNum) => {
    document.querySelectorAll(`.ex${exNum} .box`).forEach(box=>{
     box.style.background=box.innerText
    })
  }

  document.querySelectorAll(`.ex4 button, .ex5 button`).forEach(button=>{
    button.addEventListener(`click`,e=>{
      fnChangeBoxbg(e.target.value)
    })
  }) 
  

  /* document.querySelectorAll(`.ex4 button, .ex5 button`).forEach(button => {
    button.addEventListener(`click`,e=>{
      document.querySelectorAll(`.ex${e.target.value} .box`).forEach(box => {
        box.style.background = box.innerText
      })
    })
  }) 함수 사용하고 이런 방법도 있다*/
}

