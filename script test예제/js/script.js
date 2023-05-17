$(function(){
  /* 3번버튼을 클릭했을 때 콘솔의 결과 */
  function fn(param){
    return param + 1
  }

  $(`.ex1 button`).click(function(){
    var result = fn($(this).text())
    console.log(result);
  })

}) /* ex1 */

$(function(){
  /* 2번버튼을 클릭했을 때 콘솔의 결과 */
  function fn1(param){
    return param.next(`button`).attr(`data-n`) + 1
  }
  function fn2(param){
    return parseInt(param)
  }
  function fn3(param){
    if(param < 10) return false
    return (param > 10 )? param++:++param
  }

  $(`.ex2 button`).click(function(){
    var result = fn1($(this))
    result = fn2(result)
    console.log(fn3(result));
  })

}) /* ex2 */
