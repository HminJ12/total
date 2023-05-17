{
  /* let fn = function() {
    console.log('fn');
  }
  
  document.querySelector(`.ex1 button`).addEventListener(`click`,function(){
    fn()
  }) */

  /* let fn = (param) => {
    return ++param
  }
  
  document.querySelector(`.ex1 button`).addEventListener(`click`,(e)=>{
    fn()
  }) */


  /*  let fn = param => param
  //param를 넣으면 return param하겠다
  
  document.querySelector(`.ex1 button`).addEventListener(`click`,e =>{
    let n = parseInt(e.target.value) //$(this).val()
    console.log(fn(n));
  })
  
 */

  let fn = param => ++param
  document.querySelector(`.ex1 button`).addEventListener(`click`, e => {
    fn(e.target.value)
  })

}

