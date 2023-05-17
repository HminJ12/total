$(function(){/* ex1 */
  $(`.ex1 button`).click(function(){
    var num1 = parseInt($(`.ex1 .num1`).val())
    var num2 = parseInt($(`.ex1 .num2`).val())
    var sum = num1 + num2
    $(`.ex1 .output`).text(sum)
  })
})/* ex1 end */

$(function(){/* ex2 */
  $(`.ex2 button`).click(function(){
    var n = parseInt($(`.ex2 .num1`).val())
    
    var result 
    if(n >= 5 && n <= 10) {
      result = `정답`
    }else{
      result = `오답`
    }
    
    $(`.ex2 .output`).text(result)
  })
})/* ex2 end */


$(function(){/* ex3 */
  var n = 0
  $(`.ex3 button`).click(function(){
  ++ n
  if(n >5){n=0}
  
  $(`.ex3 .output`).text(n)
  })
})/* ex3 end */


$(function(){/* ex4 */
  $(`.ex4 div`).click(function(){
    $(`.ex4 div`).not($(this)).removeClass(`active`)
    $(this).toggleClass(`active`)

  })
})/* ex4 end */


$(function(){/* ex5 */
  $(`.ex5 .btn1`).click(function(){
    $(`.ex5 div`).each(function(){
      var bg = $(this).text()
      $(this).css({'background':bg})
    })
  
  })

  $(`.ex5 .btn2`).click(function(){
    $(`.ex5 div`).css({'background':`none`})
  })
})/* ex5 end */