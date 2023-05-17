function fnGetDDay(dday, now) {
  let diff = dday - now//남음 밀리세컨드
  let remainSec = parseInt(diff / 1000)//남은시간을 초로환산
  let date = Math.floor(remainSec / (24 * 60 * 60))//몇일 남았는지
  remainSec = remainSec % (24 * 60 * 60)//일로나눈 나머지
  let hour = Math.floor(remainSec / (60 * 60))//몇시간 남았는지
  remainSec = remainSec % (60 * 60)
  let min = Math.floor(remainSec / 60)//몇분 남았는지
  let sec = remainSec % 60// 몇초 남았는지
  return { date, hour, min, sec }
}//fnGetDDay

let timeStamp = Date.now()
const dDayTimeStamp = new Date(2023, 3, 26).getTime()
const { date, hour, min, sec } = fnGetDDay(dDayTimeStamp, timeStamp)

let intervalID

intervalID = setInterval(() => {
  timeStamp = Date.now()
  const { date, hour, min, sec } = fnGetDDay(dDayTimeStamp, timeStamp)
  document.querySelector(`.print`).innerHTML = `
  ${date}일 : ${hour}시간 : ${min}분 : ${sec}초
  `
}, 1000)













