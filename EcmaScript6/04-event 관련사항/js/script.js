{
  let foo = 1

  document.querySelector(`.ex1`).addEventListener(`click`,e=>{
    e.preventDefault() //a의 원래 기능을 없애버리는 것
    console.log(e.currentTarget.innerHTML);
  })
  
  document.querySelector(`.ex1 a`).addEventListener(`click`,e=>{
    e.preventDefault() 
    e.stopPropagation()
    console.log(e.target.innerHTML);
  })
  

}