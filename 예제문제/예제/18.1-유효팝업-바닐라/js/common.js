/* 
$(window),$(body)는 파싱이 끝나지 않아도 바로 적용 가능
body 안에 있는 돔요소를 찾기 위해 $(function () {}) ready 를 사용한다
 */
window.isMobile = false;

var filter = "win16|win32|win64|mac";

if (navigator.platform) {

  isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;

}

window.isIOS = false;
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  isIOS = true
}

window.isAndroid = false;
if (/Android/i.test(navigator.userAgent)) {
  isAndroid = true
}

  let reqID

  function fnGetWinInfo() {
    window.scrT = $(window).scrollTop()
    window.scrL = $(window).scrollLeft()
    window.winH = $(window).height()
    window.winW = $(window).width()
    window.docH = $(document).innerHeight()
  }//fn ** 다른곳에서 다시 값을 바꾸면 안됨



  fnGetWinInfo()
  $(window).scroll(function () {
    reqID = requestAnimationFrame(fnGetWinInfo)
  }).resize(function () {
    reqID = requestAnimationFrame(fnGetWinInfo)
  })











/* 
window.scrT  : 전역(window) - 다른파일에서도 다 변수scrT 호출 가능하다



 */