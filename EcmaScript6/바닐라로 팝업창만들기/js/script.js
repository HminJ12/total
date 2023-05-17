{
  document.querySelector(`button`).addEventListener('click',e=>{
    if(document.querySelector(`input`).checked){
      document.querySelector('.popup').style.display='none'
      localStorage.setItem('expires',Date.now()+ 5000/* (24*60*60*1000) */)

    }
  })

  if(localStorage.getItem('expires')){
    if(Date.now() < parseInt(localStorage.getItem('expires'))){  
      document.querySelector('.popup').style.display='none'
    }else{
      document.querySelector('.popup').style.display='flex' 
      localStorage.removeItem('expires')
    }
  }
}
