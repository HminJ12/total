{
  let chk = true

  // window.localStorage.removeItem('expires')
  console.log(window.localStorage.getItem('expires'));

  function popup(chk) {
    if (chk) {
      document.querySelector(`.popup`).classList.remove('active')
    } else {
      document.querySelector(`.popup`).classList.add('active')
    }
  }


  if (window.localStorage.getItem('expires')) {
    if (Date.now() < parseInt(window.localStorage.getItem('expires'))) {
      chk = false//팝업 숨기기
    } else {
      chk = true
      window.localStorage.removeItem('expires')
    }
    popup(chk)
  }



  document.querySelector(`.change`).addEventListener('change', e => {
    chk = e.target.checked
  })

  document.querySelector(`.btn`).addEventListener('click', e => {
    if (chk) {
      window.localStorage.setItem('expires', Date.now() + 5000)
    }
    chk = false
    popup(chk)
  })
}