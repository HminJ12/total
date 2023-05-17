{
  let a = 1
  let b = 1

  let arr = ['가','나','다']
  
  document.querySelector(`.ex1 button`).addEventListener(`click`,e=>{
    /* 
    arr.forEach(v=>{
      arrCopy.push(v)
    }) 
    //배열의 오리지널 복사 방법 
    */
    
    //arr.pop()
    //console.log(...arr); //...arr -> 가,나,다
    let arrCopy = [...arr]
    //arr박스를 푼 것을 다시 박스로 만든다 ->전개연산자
    console.log([...arr]); //박스를 만든다
  }) //... 전개연산자이다, 박스를 푸는 거

}

{
  let obj = {이름 : '홍', 나이 : 24}
  document.querySelector(`.ex2 button`).addEventListener(`click`,e=>{
    let objCopy = {...obj}
    delete obj.나이 //키 자체를 날리는 거
    console.log(obj, objCopy);
    //객체는 무조건 {...obj}중괄호를 해줘야 값이 나온다 
    //객체는 그냥 ...obj로 사용 못한다
  })
}

{
  let obj = {이름 : '홍', 나이 : 24}
  document.querySelector(`.ex3 button`).addEventListener(`click`,e=>{
    /* let 이름 = obj.이름
    let 나이 = obj.나이 */
    let {이름,나이} = obj
  
  }) //let 뒤에 {}, [] 중괄호, 대괄호 나오면 구조분해한 거다
} //객체 구조분해할 때 많이 사용한다

{
  let arr = [1,2,3,4]
  document.querySelector(`.ex4 button`).addEventListener(`click`,e=>{
    let [a,b,c,d] = arr
    console.log(a,b,c,d);
  })
}