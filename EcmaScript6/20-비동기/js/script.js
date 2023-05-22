{
  const 밀만들기 = function(){
    setTimeout(()=>{
      console.log('밀완성');
      setTimeout(()=>{
        console.log('밀가루 완성');
        setTimeout(()=>{
          console.log('빵완성');
          setTimeout(()=>{
            console.log('포장완성');
          }, Math.ceil(Math.random()*3) * 1000)
        }, Math.ceil(Math.random()*3) * 1000)
      }, Math.ceil(Math.random()*3) * 1000)
    }, Math.ceil(Math.random()*3) * 1000)
  }



  document.querySelector(`.ex1 button`).addEventListener('click',e=>{
    밀만들기()
  })
} //ex1

{
  const 밀만들기함수 = function(재료){
    console.log(`${재료}을 받아서 밀생산 시작`);
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('밀완성');
        resolve('밀') //이때 다음 함수가 실행되도 된다 resolve는 return과 같은 역할이다 resolve 뒤에 아무것도 쓰면 안 된다
      }, Math.ceil(Math.random()*3) * 1000)
    })
  }
  
  const 밀가루만들기함수 = function(재료){
    console.log(`${재료}을 받아서 밀가루 생산 시작`); //재료에 resolve값을 넣는다
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('밀가루 완성');
        resolve('밀가루') 
      }, Math.ceil(Math.random()*3) * 1000)
    })
  }

  const 빵만들기함수 = function(재료){
    console.log(`${재료}를 받아서 빵 생산 시작`);
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('빵 완성');
        resolve('빵') 
      }, Math.ceil(Math.random()*3) * 1000)
    })
  }
  const 빵포장함수 = function(재료){
    console.log(`${재료}을 받아서 포장 시작`);
    setTimeout(()=>{
      console.log('포장 완성');
    }, Math.ceil(Math.random()*3) * 1000)
  } //return new Promise를 안 하는 이유는 뒤에 기다리고 있는 함수가 없기 때문에 

  document.querySelector(`.ex2 button`).addEventListener('click',e=>{
    밀만들기함수('밀씨앗')
      .then((result)=>{
        return 밀가루만들기함수(result) //밀가루만들기함수('밀'), return없으면 다음에 실행이 안 된다
      }).then((result)=>{ //밀만들기에서 정확히 끝났다, 여기는 밀가루
        return 빵만들기함수(result)
      }).then((result)=>{ 
        빵포장함수(result)
      })  
  })
} //ex2

{
  const 밀만들기함수 = function(재료){
    console.log(`${재료}을 받아서 밀생산 시작`);
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('밀완성');
        resolve('밀') 
      }, Math.ceil(Math.random()*3) * 1000)
    })
  }
  
  const 밀가루만들기함수 = function(재료){
    console.log(`${재료}을 받아서 밀가루 생산 시작`); 
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('밀가루 완성');
        resolve('밀가루') 
      }, Math.ceil(Math.random()*3) * 1000)
    })
  }

  const 빵만들기함수 = function(재료){
    console.log(`${재료}를 받아서 빵 생산 시작`);
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('빵 완성');
        resolve('빵') 
      }, Math.ceil(Math.random()*3) * 1000)
    })
  }
  const 빵포장함수 = function(재료){
    console.log(`${재료}을 받아서 포장 시작`);
    setTimeout(()=>{
      console.log('포장 완성');
    }, Math.ceil(Math.random()*3) * 1000)
  } 

  document.querySelector(`.ex3 button`).addEventListener('click', async (e)=>{
    let 재료
    재료 = await 밀만들기함수('밀씨앗') //재료 = '밀'
    재료 = await 밀가루만들기함수(재료)
    재료 = await 빵만들기함수(재료)
    빵포장함수(재료) //promise를 안해서 await을 안 한다, 가독성이 높아진다, 중첩사용 가능
  })

  /* 
    async function fn (){
      await 비동기함수()
    }

    const fn = async function(){
      await 비동기함수()
    }

    const fn = async () => {
      await 비동기함수()
    }
  */

} //ex3